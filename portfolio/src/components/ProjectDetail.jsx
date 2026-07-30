import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './ProjectDetail.css';

const projects = [
  { id: 2, title: 'AI制作品牌全案', category: 'AI 品牌' },
  { id: 3, title: '平面视觉', category: '平面 / 动效', ending: true },
  { id: 4, title: 'UI/UX移动端', category: 'UI/UX 设计', ending: true },
  { id: 5, title: '复合型能力', category: '综合技能' },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auto-discover images: try img1.png/gif, img2.png/gif... until 2 consecutive failures
  useEffect(() => {
    if (!project) return;
    setImages([]);
    setLoading(true);

    let index = 1;
    let consecutiveFailures = 0;
    const maxFailures = 2;
    const discovered = [];
    const extensions = ['png', 'gif'];

    const tryNext = () => {
      if (consecutiveFailures >= maxFailures) {
        setImages(discovered);
        setLoading(false);
        return;
      }

      // For each index, try png first, then gif
      let extIndex = 0;

      const tryExtension = () => {
        if (extIndex >= extensions.length) {
          // Neither extension worked for this index
          consecutiveFailures++;
          index++;
          tryNext();
          return;
        }

        const ext = extensions[extIndex];
        const imgPath = `/projects/${id}/img${index}.${ext}`;
        const img = new Image();

        img.onload = () => {
          discovered.push(imgPath);
          consecutiveFailures = 0;
          index++;
          tryNext();
        };

        img.onerror = () => {
          extIndex++;
          tryExtension();
        };

        img.src = imgPath;
      };

      tryExtension();
    };

    tryNext();
  }, [id, project]);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail__empty">
          <p>项目不存在</p>
          <button onClick={() => navigate('/')} className="project-detail__back">
            ← 返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <button onClick={() => navigate('/')} className="project-detail__back">
          <span>←</span>
          <span>返回</span>
        </button>
        <div className="project-detail__meta">
          <span className="project-detail__category">{project.category}</span>
          <h1 className="project-detail__title">{project.title}</h1>
        </div>
      </div>

      <div className="project-detail__gallery">
        {loading && (
          <div className="project-detail__loading">
            <div className="project-detail__loading-bar" />
          </div>
        )}
        {images.map((src, i) => (
          <div key={src} className="project-detail__image-wrap">
            <img
              src={src}
              alt={`${project.title} - ${i + 1}`}
              className="project-detail__image"
              loading="lazy"
            />
          </div>
        ))}
        {!loading && images.length === 0 && (
          <p className="project-detail__empty-text">暂无展示图片</p>
        )}
      </div>

      {project.ending && (
        <div className="project-detail__ending">
          <img src="/projects/ending.png" alt="Ending" className="project-detail__ending-img" />
        </div>
      )}
    </div>
  );
}

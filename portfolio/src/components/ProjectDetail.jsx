import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './ProjectDetail.css';

const projects = [
  { id: 1, title: 'NovaOS 设计系统', category: 'UI/UX 设计' },
  { id: 2, title: 'AI 生成艺术展', category: 'AI 设计' },
  { id: 3, title: 'Luma 品牌重塑', category: '品牌设计' },
  { id: 4, title: 'Flow 智能助手', category: 'AI / 产品设计' },
  { id: 5, title: 'Zenith 数据大屏', category: '可视化设计' },
  { id: 6, title: 'Nebula 3D 视界', category: '3D 视觉' },
  { id: 7, title: 'Pulse 动效规范', category: '动效设计' },
  { id: 8, title: 'Echo 语音界面', category: 'UI/UX 设计' },
  { id: 9, title: 'Aurora 字体实验', category: '平面设计' },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auto-discover images: try img1.png, img2.png... until 2 consecutive failures
  useEffect(() => {
    if (!project) return;
    setImages([]);
    setLoading(true);

    let index = 1;
    let consecutiveFailures = 0;
    const maxFailures = 2;
    const discovered = [];

    const tryNext = () => {
      if (consecutiveFailures >= maxFailures) {
        setImages(discovered);
        setLoading(false);
        return;
      }

      const imgPath = `/projects/${id}/img${index}.png`;
      const img = new Image();

      img.onload = () => {
        discovered.push(imgPath);
        consecutiveFailures = 0;
        index++;
        tryNext();
      };

      img.onerror = () => {
        consecutiveFailures++;
        index++;
        tryNext();
      };

      img.src = imgPath;
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
    </div>
  );
}

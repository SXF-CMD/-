import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 2,
    title: 'AI制作品牌全案',
    category: 'AI 品牌',
    description: '融合 Midjourney 与即梦 AI 构建品牌 IP 全案，从视觉基因到延展应用一站式交付。',
    gradient: 'linear-gradient(135deg, #222222, #0d0d0d)',
    tags: ['IP', 'Midjourney', '即梦'],
  },
  {
    id: 3,
    title: '平面视觉',
    category: '平面 / 动效',
    description: '以标准制图为根基，叠加 AI 辅助与 AE 动效，打造兼具规范与表现力的平面视觉。',
    gradient: 'linear-gradient(135deg, #181818, #080808)',
    tags: ['AI', 'ae动效', '标准制图'],
  },
  {
    id: 4,
    title: 'UI/UX移动端',
    category: 'UI/UX 设计',
    description: '以交互思维驱动移动端体验设计，用 Figma 与 PS 将产品逻辑转化为流畅的用户旅程。',
    gradient: 'linear-gradient(135deg, #252525, #111111)',
    tags: ['figma', 'ps', '交互思维'],
  },
  {
    id: 5,
    title: '复合型能力',
    category: '综合技能',
    description: '手绘插画、视频剪辑与 vibe coding 多维协同，覆盖从创意表达到技术落地的完整链路。',
    gradient: 'linear-gradient(135deg, #1c1c1c, #0a0a0a)',
    tags: ['手绘', '剪辑', 'vibe coding'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects__header">
          <div>
            <span className="section-label">精选项目</span>
            <h2 className="section-title">代表性作品</h2>
          </div>
          <p className="section-subtitle">
            每个项目都是对设计边界的探索，从品牌系统到 AI 产品，追求卓越的视觉表达与用户体验
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="projects__card"
            >
              <div className="projects__card-visual">
                <div className="projects__card-abstract" style={{ background: project.gradient }}>
                  <div className="projects__card-pattern">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="projects__card-shape"
                        style={{
                          width: `${60 + Math.sin(i * 1.2) * 40}px`,
                          height: `${60 + Math.cos(i * 0.8) * 40}px`,
                          transform: `rotate(${i * 45}deg) translate(${Math.cos(i) * 30}px, ${Math.sin(i) * 30}px)`,
                          opacity: 0.15 + i * 0.04,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="projects__card-info">
                  <span className="projects__card-category">{project.category}</span>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects__card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="projects__card-overlay" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

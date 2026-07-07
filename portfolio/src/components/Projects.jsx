import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: '星咖福利小程序',
    category: 'UI/UX 设计',
    description: '为下一代智能操作系统构建的统一设计语言系统，涵盖 200+ 组件与完整的设计规范。',
    gradient: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
    tags: ['Figma', 'Design System', 'Components'],
  },
  {
    id: 2,
    title: 'AI 生成艺术展',
    category: 'AI 设计',
    description: '利用生成式 AI 技术创作的大型数字艺术展，在虚拟与现实空间同步呈现。',
    gradient: 'linear-gradient(135deg, #222222, #0d0d0d)',
    tags: ['Midjourney', 'Stable Diffusion', 'Processing'],
  },
  {
    id: 3,
    title: 'Luma 品牌重塑',
    category: '品牌设计',
    description: '为科技品牌 Luma 进行的全方位品牌升级，包含视觉识别、包装及数字触点设计。',
    gradient: 'linear-gradient(135deg, #181818, #080808)',
    tags: ['Branding', 'Visual Identity', 'Packaging'],
  },
  {
    id: 4,
    title: 'Flow 智能助手',
    category: 'AI / 产品设计',
    description: '面向知识工作者设计的 AI 助手产品，重新定义人机协作的交互模式。',
    gradient: 'linear-gradient(135deg, #252525, #111111)',
    tags: ['Product Design', 'AI UX', 'Prototyping'],
  },
  {
    id: 5,
    title: 'Zenith 数据大屏',
    category: '可视化设计',
    description: '面向企业级数据场景的可视化大屏设计，将复杂数据转化为直观的视觉叙事。',
    gradient: 'linear-gradient(135deg, #1c1c1c, #0a0a0a)',
    tags: ['Data Viz', 'Dashboard', 'D3.js'],
  },
  {
    id: 6,
    title: 'Nebula 3D 视界',
    category: '3D 视觉',
    description: '使用 Blender 与 Spline 创作的沉浸式三维视觉内容，为品牌发布会打造空间体验。',
    gradient: 'linear-gradient(135deg, #2a2a2a, #141414)',
    tags: ['Blender', 'Spline', 'Motion'],
  },
  {
    id: 7,
    title: 'Pulse 动效规范',
    category: '动效设计',
    description: '为跨平台产品建立统一的动效语言与过渡规范，提升整体体验质感。',
    gradient: 'linear-gradient(135deg, #202020, #0c0c0c)',
    tags: ['Motion', 'Lottie', 'Rive'],
  },
  {
    id: 8,
    title: 'Echo 语音界面',
    category: 'UI/UX 设计',
    description: '下一代语音交互界面的概念设计，探索无屏场景下的直觉化信息架构。',
    gradient: 'linear-gradient(135deg, #161616, #050505)',
    tags: ['VUI', 'AI UX', 'Concept'],
  },
  {
    id: 9,
    title: 'Aurora 字体实验',
    category: '平面设计',
    description: '基于参数化设计方法的实验性字体项目，探索算法生成在排版领域的可能性。',
    gradient: 'linear-gradient(135deg, #242424, #101010)',
    tags: ['Typography', 'Generative', 'Processing'],
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

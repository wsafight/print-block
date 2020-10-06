interface PaperConfig {
  /** 名称 */
  name: string;
  /** 标题 */
  title: string;
  /** 朝向 纵向 横项 */
  orientation: 'portrait' | 'landscape',
  cls: string
}

const DEFAULT_PAPERS: PaperConfig[] = [
  {
    name: 'a4',
    title: 'A4',
    orientation: "portrait",
    cls: 'paper-a4'
  },
  {
    name: 'a4-landscape',
    title: 'A4横向',
    orientation: 'landscape',
    cls: 'paper-a4 landscape'
  },
  {
    name: 'a5',
    title: 'A5',
    orientation: "portrait",
    cls: 'paper-a5'
  },
  {
    name: 'a5-landscape',
    title: 'A4横向',
    orientation: "landscape",
    cls: 'paper-a5 landscape'
  },
]

export default DEFAULT_PAPERS
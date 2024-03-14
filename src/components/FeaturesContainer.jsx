import Article from './ArticlesHome'
import { Feat } from './VPHomeFeatures'

export default function FeaturesContainer() {
  return (
    // <div className="articleBox">
    //   < Article
    //     icon={Feat.f1.icon}
    //     title={Feat.f1.title}
    //     details={Feat.f1.details}
    //   />
    //   < Article
    //     icon={Feat.f2.icon}
    //     title={Feat.f2.title}
    //     details={Feat.f2.details}
    //   />
    //   < Article
    //     icon={Feat.f3.icon}
    //     title={Feat.f3.title}
    //     details={Feat.f3.details}
    //   />
    //   < Article
    //     icon={Feat.f4.icon}
    //     title={Feat.f4.title}
    //     details={Feat.f4.details}
    //   />
    //   < Article
    //     icon={Feat.f5.icon}
    //     title={Feat.f5.title}
    //     details={Feat.f5.details}
    //   />
    //   < Article
    //     icon={Feat.f6.icon}
    //     title={Feat.f6.title}
    //     details={Feat.f6.details}
    //   />
    // </div>
    <div className='container'>
      <div className='articleBox'>
        <Article
          icon={Feat.f1.icon}
          title={Feat.f1.title}
          details={Feat.f1.details}
        />
        <Article
          icon={Feat.f2.icon}
          title={Feat.f2.title}
          details={Feat.f2.details}
        />
        <Article
          icon={Feat.f3.icon}
          title={Feat.f3.title}
          details={Feat.f3.details}
        />
        <Article
          icon={Feat.f4.icon}
          title={Feat.f4.title}
          details={Feat.f4.details}
        />
        <Article
          icon={Feat.f5.icon}
          title={Feat.f5.title}
          details={Feat.f5.details}
        />
        <Article
          icon={Feat.f6.icon}
          title={Feat.f6.title}
          details={Feat.f6.details}
        />
      </div>
    </div>
  )
}

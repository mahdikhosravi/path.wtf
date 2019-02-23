const React = require("react");

class Logo extends React.Component {
  render() {
    const { siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div className="projectLogo">
        <img src={`${baseUrl}img/logo.png`} alt="Project Logo" />
      </div>
    );
  }
}
class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo siteConfig={siteConfig} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("doc1.html")}>آموزش‌ها</Button>
            <Button href={docUrl("doc2.html")}>حمایت</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    const { siteConfig } = this.props;
    return (
      <div className="homeContainer pluginRowBlock">
        <div>
          <Logo siteConfig={siteConfig} />
          <h2 className="aboutUsTitle">درباره‌ی ما</h2>
          <div className="aboutUsBody">
            ایده‌ی این جا از
            <a href="https://github.com/kamranahmedse/developer-roadmap">
              <span> نقشه‌ی راه توسعه‌دهنده‌ها </span>
            </a>
            آمده‌است.
            <br />
            ما دوست داریم آموزش‌هایی رو آماده کنیم که هرکسی علاقه‌مند هست بتونه
            توسعه‌دهنده‌ بشه. هرکسی دوست داره می‌تونه به ما کمک کنه. همه چیز توی
            گیت‌هاب ما هست. تمام محتوا منبع‌باز هست و می‌مونه.
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <AboutUs siteConfig={siteConfig} />
      </div>
    );
  }
}

module.exports = Index;

import React from "react";

let initialValue:any = {}
const PageContext = React.createContext(initialValue);

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  ) ||
  window.location.hostname.match(/^192\.168\.[0-9]{1,3}\.[0-9]{1,3}$/)
);

class PageContextProvider extends React.Component {

  public interval: any = false;
  
  public state: any = {
    arabic: false,
    width: window.innerWidth,
    height: window.innerHeight,
    isLocalhost: isLocalhost,
    isMobile: window.innerWidth < 900
  };
  constructor(props: any) {
    super(props);
    this.langArabic = this.langArabic.bind(this);
    this.update = this.update.bind(this);
  }
  async update() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 900
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.update, 250);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  langArabic() {
    this.setState({ arabic: true });
  }
  render() {
    return (
      <PageContext.Provider
        value={{
          ...this.state,
          langArabic: this.langArabic,
        }}
      >
        {this.props.children}
      </PageContext.Provider>
    );
  }
}

export { PageContext, PageContextProvider };

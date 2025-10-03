import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {}, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count === !prevState.count ||
      this.state.count === !prevState.count
    );
    else {
    }
    if (
      this.state.count2 === !prevState.count2 ||
      this.state.count2 === !prevState.count2
    );
    else {
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>

        <h4>Contact:@rahulpatil</h4>
      </div>
    );
  }
}

export default UserClass;

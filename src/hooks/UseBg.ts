import classNames from "classnames";

const UseBg = (name: string = "home") => {

  document.body.className = classNames('body', name);

}

export default UseBg
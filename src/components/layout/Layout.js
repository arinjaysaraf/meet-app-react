import classes from "./Layout.module.css";

function layout(props) {
  return (
    <div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default layout;

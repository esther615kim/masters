import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxContainer: {
  },
  card: {
    maxWidth: 320,
    textAlign: "left",
    height: 230,
    margin: 5,
    border: "none",
    // boxShadow: "none"
  },
  media: {
    height: 38,
    paddingTop: "50%" //16:9 비율이래
  },
  userNumber: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginLeft: 45,
    fontWeight: 700,
    textAlign: "left"
  },
  topSearchBox: {
    display: "flex",
    flexDirection: "column",
    padding: 80,
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    background: "url('https://dmmj3ljielax6.cloudfront.net/upload/requestForm/26a5e44f-64cd-41a9-aba0-c2717d139795.png')",
  },
  SearchBtn: {
    // background: "hsl(5, 83 %, 74 %)",
    color: "#212121",
    padding: 7,
    marginLeft: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    padding: 15,
  },
  stack: {
    display: "flex",
    justifyContent: "center",
  },
  textBox: {
    display: "flex",
    marginTop: 20,
    flexDirection: "column",
    padding: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  stackBox: {
    height: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  serviceCardBox: {
    display: "flex",
    Width: "100 %",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  serviceList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    // justifyContent: "center",
    alignItems: "flex-start"
  }
});

export default useStyles;

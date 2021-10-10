import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxContainer: {
    margin: "0 auto",
    maxWidth: 1000,
    height: 300,
    padding: 5,
    textAlign: "left"
  },

  card: {
    maxWidth: 320,
    height: 220,
    margin: 3,
    marginRight: 10
  },
  media: {
    height: 38,
    paddingTop: "50%" //16:9 비율이래
  },
  title: {
    marginLeft: 45,
    marginBottom: 5,
    textAlign: "left"
  },
  text: {
    paddingTop: 10
  },
  SearchBox: {
    display: "flex",
    flexDirection: "column",
    padding: 80,
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://481xy61dp22v2uqbx85ez1tw-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/No-Branding-Header-Background-1.jpg') cover"
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
  stackBox: {
    height: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

});

export default useStyles;

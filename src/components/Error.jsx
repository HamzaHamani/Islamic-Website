import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
function Error({ message }) {
  return (
    <div className="relative top-[40%] left-[50%] -translate-x-1/2 p-3">
      <Alert
        severity="error"
        className="bg-black "
        sx={{ fontSize: "1.4rem", fontFamily: "Poppins" }}
      >
        <AlertTitle
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "Poppins",
          }}
        >
          Error
        </AlertTitle>
        {message} <strong>check it out!</strong>
      </Alert>
    </div>
  );
}

export default Error;

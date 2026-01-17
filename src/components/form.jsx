import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Form = () => {
  const [sso, setSso] = useState("");

  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAction = (successMsg) => {
    if (!sso.trim()) {
      setSnack({
        open: true,
        message: "Please enter SSO ID first",
        severity: "warning",
      });
      return;
    }

    setSnack({
      open: true,
      message: successMsg,
      severity: "success",
    });
  };

  return (
    <div className="flex justify-center pt-16 px-4 sm:pt-24">
      <form className="p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-5xl space-y-8 bg-gray-100/80">
        <div>
          <h1 className="text-center text-2xl font-bold uppercase">GE Form</h1>
          <p className="text-center">Enter your SSO ID to get started.</p>
        </div>

        {/* SSO INPUT */}
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <TextField
              label="SSO ID"
              value={sso}
              onChange={(e) => setSso(e.target.value)}
              error={!sso.trim() && snack.severity === "warning"}
              fullWidth
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-3 gap-6">
          <Button
            variant="contained"
            onClick={() => handleAction("User added successfully")}
          >
            Add User
          </Button>

          <Button
            variant="contained"
            onClick={() => handleAction("Password synced successfully")}
          >
            Sync Password
          </Button>

          <Button
            variant="contained"
            onClick={() => handleAction("Ping ID set successfully")}
          >
            Set Ping ID
          </Button>
        </div>
      </form>

      {/* SNACKBAR */}
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snack.severity} variant="filled">
          {snack.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Form;

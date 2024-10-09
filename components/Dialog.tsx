import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "./CustomButton";

interface AlertDialogProps {
  confirmLabel?: string;
  closeLabel?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  content?: string;
  title?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const {
    onConfirm,
    onClose,
    isOpen = false,
    content,
    confirmLabel,
    closeLabel,
    title,
  } = props ?? {};

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {closeLabel ? (
            <CustomButton
              design="outlineYellow"
              onClick={handleClose}
              label={closeLabel}
            />
          ) : null}
          {confirmLabel ? (
            <CustomButton
              design="containedYellow"
              onClick={handleConfirm}
              label={confirmLabel}
            />
          ) : null}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;

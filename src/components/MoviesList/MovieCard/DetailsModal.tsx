import React from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DetailsModalProps {
  onClick: ()=>void;
  detailsText: string;
}

const DetailsModal = ({ onClick, detailsText }: DetailsModalProps) => (
  <Stack
    className="details-modal"
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
  >
    <Typography variant="body2" component="h2">
      {detailsText}
    </Typography>
    <IconButton onClick={onClick}><CloseIcon /></IconButton>
  </Stack>
);

export default DetailsModal;

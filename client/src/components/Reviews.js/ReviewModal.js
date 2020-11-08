import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import '../../styling/review.css';
import { postReview } from '../../services/reviewServices'

// const StyledTitle = withStyles({
//       root: {
//           margin-left: '100px'
//       }
// })

export default function FormDialog(id) {
  const [open, setOpen] = useState(false);
  const [accuracy, setAccuracy] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [cleanliness, setCleanliness] = useState(5);
  const [locationReview, setLocationReview] = useState(5);
  const [checkIn, setCheckIn] = useState(5);
  const [value, setValue] = useState(5);
  const [text, setText] = useState("");

  // let accuracy;
  // let communication;
  // let cleanliness;
  // let locationReview;
  // let checkIn;
  // let value;


  let today = moment()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setText("");
    setOpen(false);
  };

  const handleSubmit = async function () {
    
    await postReview({
      accuracy: accuracy,
      communication: communication,
      cleanliness: cleanliness,
      locationReview: locationReview,
      checkIn: checkIn,
      value: value,
      text: text,
      reviewDate: today,
      id: id
    });
    setOpen(false);
  }

  const handleReview = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Review
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle  id="form-dialog-title">Subscribe</DialogTitle> */}
        <h1 className="Howdy">Write a Review</h1>
        <DialogContent>
        <div className="rating-container">
            <Typography component="legend">Accuracy</Typography>
                <Rating
                    name="accuracy"
                    value={accuracy}
                    onChange={(event, newValue) => {
                    setAccuracy(newValue);
                    }}
                />

            <Typography component="legend">Communication</Typography>
                <Rating
                    name="communication"
                    value={communication}
                    onChange={(event, newValue) => {
                    setCommunication(newValue);
                    }}
                />
            <Typography component="legend">Cleanliness</Typography>
                <Rating
                    name="cleanliness"
                    value={cleanliness}
                    onChange={(event, newValue) => {
                    setCleanliness(newValue);
                    }}
                />

            <Typography component="legend">Location</Typography>
                <Rating
                    name="location"
                    value={locationReview}
                    onChange={(event, newValue) => {
                    setLocationReview(newValue);
                    }}
                />
            <Typography component="legend">Check-In</Typography>
                <Rating
                    name="checkin"
                    value={checkIn}
                    onChange={(event, newValue) => {
                    setCheckIn(newValue);
                    }}
                />

            <Typography component="legend">Value</Typography>
                <Rating
                    name="value"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />                                
            </div>
            {/* <input  
              type="text"
              className="review-text"
              value={text}
              placeholder="How was your stay..."
              onChange={() => setText(value)}
              /> */}
              <textarea 
                value={text} 
                onChange={handleReview} 
                placeholder="How was your stay..."
                className="review-text" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
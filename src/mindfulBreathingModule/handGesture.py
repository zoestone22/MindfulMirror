
import cv2 # type: ignore

# Function to detect hand gesture
def detect_hand(frame):
    # Convert frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Apply Gaussian blur to reduce noise
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Perform background subtraction
    _, threshold = cv2.threshold(blurred, 100, 255, cv2.THRESH_BINARY)

    # Find contours in the thresholded image
    contours, _ = cv2.findContours(threshold.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Check if any contours are found
    if len(contours) > 0:
        # Find the contour with the largest area (hand)
        max_contour = max(contours, key=cv2.contourArea)

        # Compute the bounding box for the contour
        x, y, w, h = cv2.boundingRect(max_contour)

        # Draw the bounding box around the hand
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Check if the height of the bounding box is greater than the width
        if h > w:
            # Hand raised gesture detected
            mindfulBreathing.notificationReceived()  # type: ignore

    # Display the frame with contours
    cv2.imshow("Hand Gesture Recognition", frame)

# Main function
def main():
    # Initialize the fish-eye lens camera (replace 0 with the appropriate camera index)
    cap = cv2.VideoCapture(0)

    # Infinite loop to continuously capture frames
    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Check if the frame is captured successfully
        if not ret:
            break

        # Detect hand gesture
        detect_hand(frame)

    # Release the camera
    cap.release()
    # Close OpenCV windows
    cv2.destroyAllWindows()

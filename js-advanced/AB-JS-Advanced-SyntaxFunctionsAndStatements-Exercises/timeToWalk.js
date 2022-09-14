function timeToWalk(steps, footprint, speed) {
    let restThreshold = 500;  //meters
    
    let adjustedSpeed = speed / 3.6;  // m/s
    
    let distance = steps * footprint;  //meters

    let totalBreaks = Math.floor(distance / restThreshold) * 60;  //seconds

    let totalSeconds = (distance / adjustedSpeed) + totalBreaks;


    let hours = Math.floor(totalSeconds / 3600);
    
    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);

    let seconds = Math.round(totalSeconds % 60, 0);

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    
}

timeToWalk(4000, 0.60, 5);

timeToWalk(2564, 0.70, 5.5)
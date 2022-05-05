// Find maxSum of subarray
exports.subArray = function(array, max) {
    var maxValue = 0;  checkElement = 0; firstElementPosition = 0; endElementPosition = 0; 
    var l = array.length;
    for (let i = 0; i < l; i++) {
        maxValue += array[i];

        if (maxValue <= 0) { 
            maxValue = 0;
            checkElement = i + 1; 
        };

        if (maxValue >= 0 && max <= maxValue) {
            firstElementPosition = checkElement;
            endElementPosition = i;
        }
    };
    return max = maxValue;
};






var makeIpCounter = (ips) => {
    var current = 0;
    var max = ips.length-1;
    return function() {
        let result;
        if (current >= max) {
            current = 0;
            result = 0;
        } else {
            result = ++current;
        }
        return ips[result];
    }
}

const ips = [
    "http://13.57.30.72:1600",
    "http://52.53.216.29:1600"
];

module.exports = makeIpCounter(ips);
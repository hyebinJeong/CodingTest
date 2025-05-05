function solution(bridge_length, weight, truck_weights) {
    var time = 0;
    // 다리에 올라갈 수 있는 최대 트럭 -> bridge_length;
    // 다리가 견딜 수 있는 무게 -> weight
    // 트럭별 무게 배열 -> truck_weights
    let bridge = Array(bridge_length).fill(0);
    let totalWeight = 0;
    
    while (truck_weights.length > 0 || totalWeight > 0) {
        time++;
        totalWeight -= bridge.shift();
        
        if (truck_weights.length > 0) {
           if (totalWeight + truck_weights[0] <= weight) {
               let truck = truck_weights.shift();
               bridge.push(truck);
               totalWeight += truck;
           } else {
               bridge.push(0); 
           }
        }
    }
    return time;
}
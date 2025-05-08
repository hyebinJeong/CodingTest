function solution(nums) {
    const uniqueNums = new Set(nums);
    const maxSelect = nums.length / 2;
    
    return Math.min(uniqueNums.size, maxSelect);
}

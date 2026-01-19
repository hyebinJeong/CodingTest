def solution(s):
    lower_s = s.lower()
    sum_p = 0
    sum_y = 0
    for i in range(len(lower_s)):
        if lower_s[i] == "p":
            sum_p += 1
        elif lower_s[i] == "y":
            sum_y += 1
    return True if sum_p == sum_y else False
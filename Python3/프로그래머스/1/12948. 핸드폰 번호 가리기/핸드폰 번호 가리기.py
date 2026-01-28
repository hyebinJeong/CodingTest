def solution(phone_number):
    answer1 = ''
    answer2 = (phone_number[-4:])
    for i in range(len(phone_number) - len(answer2)):
        answer1 += '*'
    return answer1 + answer2
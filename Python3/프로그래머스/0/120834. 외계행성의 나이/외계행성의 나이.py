def solution(age):
    answer = ''
    list_age = list(str(age))
    # 딕셔너리로 풀면 될듯
    alien_age = {'0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e','5': 'f', '6': 'g', '7': 'h', '8': 'i', '9': 'j'}
    for num in list_age:
            answer += alien_age.get(num)
    return answer
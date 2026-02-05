def solution(id_pw, db):
    for info in db:
        if info[0] == id_pw[0] and info[1] != id_pw[1]:
            return "wrong pw"
        elif info[0] == id_pw[0] and info[1] == id_pw[1]:
            return "login"
    return "fail"
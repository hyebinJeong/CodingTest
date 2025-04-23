function solution(new_id) {
    // 1단계. 소문자 치환
    new_id = new_id.toLowerCase();

    // 2단계. 허용 문자만 필터링
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');

    // 3단계. 마침표(.)가 2번 이상 연속된 부분을 하나로 치환
    new_id = new_id.replace(/\.{2,}/g, '.');

    // 4단계. 처음과 끝의 마침표 제거
    new_id = new_id.replace(/^\.|\.$/g, '');

    // 5단계. 빈 문자열이면 "a" 대입
    if (new_id === '') new_id = 'a';

    // 6. 16자 이상이면 처음 15자 자르고, 끝이 마침표면 제거
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        new_id = new_id.replace(/\.$/, '');
    }

    // 7. 길이가 2자 이하라면 마지막 문자를 반복하여 길이 3까지
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}

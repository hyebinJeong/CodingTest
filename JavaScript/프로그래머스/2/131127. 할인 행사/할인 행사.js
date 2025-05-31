function solution(want, number, discount) {
    let answer = 0;
    const objWant = want.reduce((acc, cur, idx) => {
        acc[cur] = number[idx];
        return acc;
    }, {}); // 원하는 제품과 수량 객체 생성

    for (let i = 0; i <= discount.length - 10; i++) { // 10일씩 끊어서 확인
        const discountDays = discount.slice(i, i + 10); // 10일간 할인 제품 목록
        const tempWant = { ...objWant }; // objWant 복사본

        for (const product of discountDays) { // 10일간 할인 제품 확인
            if (tempWant[product] > 0) { // 원하는 제품이 남아있으면
                tempWant[product]--; // 수량 감소
            }
        }

        let isPossible = true;
        for (const product in tempWant) { // 원하는 제품 모두 할인받았는지 확인
            if (tempWant[product] > 0) { // 원하는 제품 남은 수량이 0보다 크면
                isPossible = false; // 할인 불가
                break;
            }
        }

        if (isPossible) { // 모두 할인받았으면
            answer++; // 정답 증가
        }
    }

    return answer;
}
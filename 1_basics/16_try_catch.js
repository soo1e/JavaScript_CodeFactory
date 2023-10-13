/**
 * try...catch
 *
 * 1) 발생시킬때 -> 던진다. throw! : 함수가 정지된다.
 * 2) 명시적으로 인지할때 -> 잡는다. catch!
 */

function runner() {
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    }catch(e){
        console.log('---catch---');
        console.log('e');
    } finally { // try에서 에러가 났든 안 났든 무조건 실행한다.
        console.log('---finally---');
    }
}
runner();


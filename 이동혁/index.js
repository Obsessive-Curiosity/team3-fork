const input = document.querySelector("#input");
const command = document.querySelector("#command");
const inputDiv = document.querySelector("#inputDiv");
const path = document.querySelector(".path");

input.focus();


let realPath = 'directory';
const directory = {};

directory.folders = ['JavaScript', 'CSS', 'HTML'];
directory.folders['JavaScript'] = ['인터렉티브 자바스크립트', '모던 자바스크립트', '자바스크립트 기초'];
directory.folders['CSS'] = ['Cascading', '스타일시트'];
directory.folders['HTML'] = ['시맨틱 태그', 'DNS', 'URL'];

let currentDirectory = Object.assign({}, directory);
console.log(currentDirectory);


function commandFunc (event) {
    if(event.key === 'Enter') {
        const log = input.value;
        input.value = '';
        const logs = command.cloneNode(true);
        
        switch(log){
            
            // 명령어 도움말

            case 'help' :
                logs.innerHTML += '<br />============== Git 명령어 ==============<br /><br />git name : 이름 정보를 출력합니다.<br />git mbti : MBTI 정보를 출력합니다.<br />git fav -song : 가장 좋아하는 노래를 출력합니다.<br />git fav -food : 가장 좋아하는 음식을 출력합니다.<br />git hat -food : 가장 싫어하는 음식을 출력합니다.<br />git personal -info : TMI를 출력합니다.<br />git fav -hobbies : 가장 좋아하는 취미를 출력합니다.<br /><br />============= 일반 명령어 ==============<br /><br />clear : 로그를 초기화합니다.<br />ls : 현재 폴더의 폴더 리스트를 출력합니다.<br /><del>cd [폴더명] : 폴더로 들어갑니다.<br />mkdir [폴더명] : 폴더를 생성합니다.<br />cd .. : 상위 폴더로 이동합니다.<br /></del>';
                break;

            // 이름 출력

            case 'git name' :
                logs.innerHTML += '이동혁';
                break;

            // MBTI 출력

            case 'git mbti' : 
                logs.innerHTML += 'INTP';
                break;

            // 가장 좋아하는 노래 출력

            case 'git fav -song' :
                logs.innerHTML += 'Sondia의 어른';
                break;

            // 가장 좋아하는 음식 출력
            
            case 'git fav -food' :
                logs.innerHTML += '가장 좋아하는 음식은 커피입니다.';
                break;

            // 가장 싫어하는 음식 출력

            case 'git hat -food' :
                logs.innerHTML += '가장 좋아하는 음식은 커피입니다.';
                break;

            // TMI 출력
            
            case 'git personal -info' :
                logs.innerHTML += '여러사람과 대화하는 것보다 한 사람과 대화하는 걸 좋아합니다.';
                break;

            // 가장 좋아하는 취미 출력

            case 'git fav -hobbies' :
                logs.innerHTML += '가장 좋아하는 취미는 게임을 하는 것과 여행을 가는 것입니다.';
                break;

            // 현재 path 내에 존재하는 폴더들 출력

            case 'ls' :
                if(realPath === 'directory') for(const folder of currentDirectory.folders){
                    logs.innerHTML += folder + '&nbsp&nbsp&nbsp';
                }
                break;

            // 로그 초기화
            
            case 'clear' :
                location.reload();
                break;

            // 그 외
            
            default:

                // cd 명령어    

                if(log.indexOf('cd') !== -1){
                    
                    logs.innerHTML += 'cd 명령어는 준비중인 기능입니다.';

                }

                // mkdir 명령어

                else if(log.indexOf('mkdir') !== -1){
                    
                    logs.innerHTML += 'mkdir 명령어는 준비중인 기능입니다.';

                }

                // 알 수 없는 명령어

                else logs.innerHTML += '<br />이해할 수 없는 명령어입니다.';
            
        }

        
        command.before(logs);
        
        window.scrollTo(0, document.body.scrollHeight);
        
    }
    
}

input.addEventListener("keydown", commandFunc);
document.addEventListener("click", function(){
    input.focus();
});


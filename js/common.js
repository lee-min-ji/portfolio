$(function () {
    // 메뉴 버튼
    let menuBtn = document.querySelector('.menu_btn');
    let nav = document.querySelector('.menu');
    let fixBody = document.querySelector('body');
    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('open');
        fixBody.classList.toggle('fix');
    });

    // 스크롤시 상단 고정
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let widthSize = window.outerWidth;
        let scrollThreshold = widthSize <= 1600 ? 70 : 130;

        // 슬라이드 상단
        if (window.scrollY > scrollThreshold) {
            document.getElementById('wrap').classList.add('scroll');
        } else {
            document.getElementById('wrap').classList.remove('scroll');
        }
    });


    // ***로그인/회원가입 팝업창***
    document.querySelectorAll('.trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            document.body.classList.toggle('fix');
            document.querySelector('.modal-wrapper').classList.toggle('open');
            return false;
        });
    });

    // 약관동의 체크박스
    $(document).ready(function () {
        // 초기 로드 시 "가입하기" 링크 비활성화
        $(".join_btn").prop("disabled", true);

        // 체크박스 상태 변화 감지
        $(".join_agree_article :checkbox").on("change", function () {
            // 모든 체크박스의 상태 확인
            var allChecked = $(".join_agree_article :checkbox").not("#all_agree").filter(":checked").length === $(".join_agree_article :checkbox").not("#all_agree").length;

            // "가입하기" 링크 활성화/비활성화
            $(".join_btn").prop("disabled", !allChecked);
        });

        // 전체 동의 체크박스 상태 변화 감지
        $("#all_agree").on("change", function () {
            // 모든 체크박스의 상태 설정
            $(".join_agree_article :checkbox").prop("checked", $(this).prop("checked"));

            // "가입하기" 링크 활성화/비활성화
            $(".join_btn").prop("disabled", !$(this).prop("checked"));
        });
    });
});


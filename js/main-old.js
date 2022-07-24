'use strict';
$(document).ready(function () {
  var pageHeaderAddress = document.getElementById('page-header-address');
  var floatingMenuAddress = document.getElementById('floating-menu-address');

  var overlay = document.getElementsByClassName('overlay');

  /*запоминаем все инпуты*/
  var introInputName = document.getElementById('intro-input-name');
  var introInputPhone = document.getElementById('intro-input-phone');
  var introInputCity = document.getElementById('intro-input-city');

  var sevenInputName1 = document.getElementById('seven-input-name-1');
  var sevenInputPhone1 = document.getElementById('seven-input-phone-1');
  var sevenInputCity1 = document.getElementById('seven-input-city-1');

  var sevenInputName2 = document.getElementById('seven-input-name-2');
  var sevenInputPhone2 = document.getElementById('seven-input-phone-2');
  var sevenInputCity2 = document.getElementById('seven-input-city-2');

  var callbackInputName = document.getElementById('callback-input-name');
  var callbackInputPhone = document.getElementById('callback-input-phone');
  var callbackInputCity = document.getElementById('callback-input-city');
  
  var bankInputName = document.getElementById('bank-input-name');
  var bankInputPhone = document.getElementById('bank-input-phone');
  var bankInputCity = document.getElementById('bank-input-city');
  var bankInput = document.getElementById('bank-input');
  /* */
  /* заполняем скрытые поля с указанием Города*/
  $(introInputCity).val('Краснодар');
  $(sevenInputCity1).val('Краснодар');
  $(sevenInputCity2).val('Краснодар');
  $(callbackInputCity).val('Краснодар');
  $(bankInputCity).val('Краснодар');
  /* */
  /*отрабатываем цели при клике на телефон*/
  var pageHeaderPhone = document.getElementsByClassName('page-header__contact--phone');
  var mapLinkPhone = document.getElementsByClassName('map__link--phone');

  $(pageHeaderPhone).click(function () {
    yaCounter45697713.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });

  $(mapLinkPhone).click(function () {
    yaCounter45697713.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });
  /* */
  /* map */
  var mapSection = document.getElementsByClassName('map');
  var mapField = document.getElementById('map-field');
  var mapAddress = document.getElementById('map-address');

  var addressMaykop = 'Республика Адыгея г. Майкоп ул. Чкалова д. 65 офис 27а, 2 этаж Юридическая защита';
  var addressKrasnodar = 'г. Краснодар ул.Красная д. 145/1 офис';
  var addressRostov = 'г.Ростов-на-Дону ул. Катаева д.293';
  var addressMoscow = 'Москва: Остаповский пр-д, 3';
  var addressNovosibirsk = 'Новосибирск, Коммунистическая ул. 2, офис 2'

  var mapMaykop = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af680dc5c1f17279f65e96d0110c70262144341422722e0cf85d6eb414893ba28&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>'
  var mapKrasnodar = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa894d1b4f3f96266b421b8ee9dd4e5365bf55b2ded0d8994fa08f6a0d466285&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>'
  var mapRostov = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a7d1547d830626e6bbfe17f8552f254e17b06e1bea70392b018b1ce95601613&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
  var mapMoscow = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7c9f65985fd0bc679ceeb1536cc060b44865edea62ad70fab0c480c319cb429&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
  var mapNovosibirsk = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A14a172cc1fa8958589d72599bbd4b2123786a0a43dd10994c21be82b5f68df1d&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';


  mapField.innerHTML = mapKrasnodar;
  /* */
  /*открытие попапа с формой при нажатии на кнопки в хедере и футере */
  var pageHeaderBtn = document.getElementsByClassName('page-header__button');
  var pageFooterBtn = document.getElementsByClassName('page-footer__btn');
  var floatingMenuBtn = document.getElementsByClassName('floating-menu__button');

  var stagesItemLink = document.getElementsByClassName('stages__item-link');

  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupSuccessBtn = document.getElementsByClassName('popup-success__btn');
  var popupSuccesCloseBtn = document.getElementsByClassName('popup-success__close-btn');

  function showPopupCallback() {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  }

  $(pageHeaderBtn).click(showPopupCallback);
  $(pageFooterBtn).click(showPopupCallback);
  $(floatingMenuBtn).click(showPopupCallback);
  $(stagesItemLink).click(showPopupCallback);

  $(popupCallbackCloseBtn).click(function () {
    $(popupCallback).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(popupSuccesCloseBtn).click(function () {
    $(popupSuccess).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(popupSuccessBtn).click(function () {
    $(popupSuccess).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */

      $('html, body').animate({ scrollTop: dn }, 1000);

      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });
  /* */
  /*парсим utm и определяем с какого Города зашли*/
  function findEnd(url, urlpos) {
    for (var i = urlpos; i <= url.length; i++) {
      if (url[i] == '&') {
        return i;
      } else if (i == (url.length - 1)) {
        return i + 1;
      }
    }
  }

  function findUtmInfo(utmInfoStr) {
    var utmInfoStart = utmUrl.indexOf(utmInfoStr);
    var utmNameLength = utmInfoStr.length + 1;
    var utmInfoStartInt = parseInt(utmInfoStart) + utmNameLength;
    var utmInfoEndInt = findEnd(utmUrl, utmInfoStartInt);
    var utmInfo = utmUrl.slice(utmInfoStartInt, utmInfoEndInt);
    return utmInfo;
  }

  var utmUrl = decodeURI(document.location.search);

  var utmSource = findUtmInfo('utm_source');
  var utmMedium = findUtmInfo('utm_medium');
  var utmCampaign = findUtmInfo('utm_campaign');
  var utmContent = findUtmInfo('utm_content');
  var utmTerm = findUtmInfo('utm_term');
  console.log('utm_source: ' + utmSource + '; utm_medium: ' + utmMedium + '; utm_campaign: ' + utmCampaign + '; utm_content: ' + utmContent + '; utm_term: ' + utmTerm);
  /* */
  /* отрабатываем подставления в зависимости от того какой город в UTM метке*/
  var popupCity = document.getElementsByClassName('popup-city');

  if (~utmContent.indexOf('adygeya')) {
    console.log('Майкоп');
    mapField.innerHTML = mapMaykop;
    mapAddress.textContent = addressMaykop;
    pageHeaderAddress.textContent = 'Майкоп';
    floatingMenuAddress.textContent = 'Майкоп';
    $(introInputCity).val('Майкоп');
    $(sevenInputCity1).val('Майкоп');
    $(sevenInputCity2).val('Майкоп');
    $(callbackInputCity).val('Майкоп');
    $(bankInputCity).val('Майкоп');
  } else if (~utmContent.indexOf('krasnodar')) {
    console.log('Краснодар');
    mapField.innerHTML = mapKrasnodar;
    mapAddress.textContent = addressKrasnodar;
    pageHeaderAddress.textContent = 'Краснодар';
    floatingMenuAddress.textContent = 'Краснодар';
    $(introInputCity).val('Краснодар');
    $(sevenInputCity1).val('Краснодар');
    $(sevenInputCity2).val('Краснодар');
    $(callbackInputCity).val('Краснодар');
    $(bankInputCity).val('Краснодар');
  } else if (~utmContent.indexOf('rostov')) {
    console.log('Ростов-на-Дону');
    mapField.innerHTML = mapRostov;
    mapAddress.textContent = addressRostov;
    pageHeaderAddress.textContent = 'Ростов-на-Дону';
    floatingMenuAddress.textContent = 'Ростов-на-Дону';
    $(introInputCity).val('Ростов-на-Дону');
    $(sevenInputCity1).val('Ростов-на-Дону');
    $(sevenInputCity2).val('Ростов-на-Дону');
    $(callbackInputCity).val('Ростов-на-Дону');
    $(bankInputCity).val('Ростов-на-Дону');
  } else if (~utmContent.indexOf('moscow')) {
    console.log('Москва');
    mapField.innerHTML = mapMoscow;
    mapAddress.textContent = addressMoscow;
    pageHeaderAddress.textContent = 'Москва';
    floatingMenuAddress.textContent = 'Москва';
    $(introInputCity).val('Москва');
    $(sevenInputCity1).val('Москва');
    $(sevenInputCity2).val('Москва');
    $(callbackInputCity).val('Москва');
    $(bankInputCity).val('Москва');
  } else if (~utmContent.indexOf('altay')) {
    console.log('Новосибирск');
    mapField.innerHTML = mapNovosibirsk;
    mapAddress.textContent = addressNovosibirsk;
    pageHeaderAddress.textContent = 'Новосибирск';
    floatingMenuAddress.textContent = 'Новосибирск';
    $(introInputCity).val('Новосибирск');
    $(sevenInputCity1).val('Новосибирск');
    $(sevenInputCity2).val('Новосибирск');
    $(callbackInputCity).val('Новосибирск');
    $(bankInputCity).val('Новосибирск');
  } else if (~utmContent.indexOf('rusfed')) {
    console.log('РФ');
    $(mapSection).hide();
    $(pageHeaderAddress).hide();
    $(floatingMenuAddress).hide();
    $(introInputCity).val('РФ');
    $(sevenInputCity1).val('РФ');
    $(sevenInputCity2).val('РФ');
    $(callbackInputCity).val('РФ');
    $(bankInputCity).val('РФ');
  }

  else {
    console.log('Москва');
    mapField.innerHTML = mapMoscow;
    mapAddress.textContent = addressMoscow;
    pageHeaderAddress.textContent = 'Москва';
    floatingMenuAddress.textContent = 'Москва';
    $(introInputCity).val('Москва');
    $(sevenInputCity1).val('Москва');
    $(sevenInputCity2).val('Москва');
    $(callbackInputCity).val('Москва');
    $(bankInputCity).val('Москва');
  }
  /* */
  /*применяем изменения в зависимости от выборы города через popup-city*/
  var chooseCityBtn = document.getElementsByClassName('popup-city__btn');
  var selectCity = document.getElementById('popup-city-select');
  var city = 'Краснодар';

  $(chooseCityBtn).click(function () {
    city = $(selectCity).val();
    if (city == 'Майкоп') {
      mapField.innerHTML = mapMaykop;
      mapAddress.textContent = addressMaykop;
      pageHeaderAddress.textContent = 'Майкоп';
      floatingMenuAddress.textContent = 'Майкоп';
      $(introInputCity).val('Майкоп');
      $(sevenInputCity1).val('Майкоп');
      $(sevenInputCity2).val('Майкоп');
      $(callbackInputCity).val('Майкоп');
      $(bankInputCity).val('Майкоп');
    } else if (city == 'Ростов-на-Дону') {
      mapField.innerHTML = mapRostov;
      mapAddress.textContent = addressRostov;
      pageHeaderAddress.textContent = 'Ростов-на-Дону';
      floatingMenuAddress.textContent = 'Ростов-на-Дону';
      $(introInputCity).val('Ростов-на-Дону');
      $(sevenInputCity1).val('Ростов-на-Дону');
      $(sevenInputCity2).val('Ростов-на-Дону');
      $(callbackInputCity).val('Ростов-на-Дону');
      $(bankInputCity).val('Ростов-на-Дону');
    } else if (city == 'Краснодар') {
      mapField.innerHTML = mapKrasnodar;
      mapAddress.textContent = addressKrasnodar;
      pageHeaderAddress.textContent = 'Краснодар';
      floatingMenuAddress.textContent = 'Краснодар';
      $(introInputCity).val('Краснодар');
      $(sevenInputCity1).val('Краснодар');
      $(sevenInputCity2).val('Краснодар');
      $(callbackInputCity).val('Краснодар');
      $(bankInputCity).val('Краснодар');
    } else if (city == 'Москва') {
      mapField.innerHTML = mapMoscow;
      mapAddress.textContent = addressMoscow;
      pageHeaderAddress.textContent = 'Москва';
      floatingMenuAddress.textContent = 'Москва';
      $(introInputCity).val('Москва');
      $(sevenInputCity1).val('Москва');
      $(sevenInputCity2).val('Москва');
      $(callbackInputCity).val('Москва');
      $(bankInputCity).val('Москва');
    } else if (city == 'Новосибирск') {
      mapField.innerHTML = mapNovosibirsk;
      mapAddress.textContent = addressNovosibirsk;
      pageHeaderAddress.textContent = 'Новосибирск';
      floatingMenuAddress.textContent = 'Новосибирск';
      $(introInputCity).val('Новосибирск');
      $(sevenInputCity1).val('Новосибирск');
      $(sevenInputCity2).val('Новосибирск');
      $(callbackInputCity).val('Новосибирск');
      $(bankInputCity).val('Новосибирск');
    }
    $(popupCity).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /* открываем popup-city при нажатии на город в обычном и всплывающем хедере */
  $(pageHeaderAddress).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCity).fadeIn(300);
    }, 300);
  });
  $(floatingMenuAddress).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCity).fadeIn(300);
    }, 300);
  });
  /*отрабатываем галерею с выписками*/
  var proofImg = document.getElementsByClassName('proof__img');
  proofImg = Array.prototype.slice.call(proofImg);

  proofImg.forEach(function (element, i) {
    $(element).click(function () {

    });
  });
  /* */
  /* попап для банков*/
  var banksItem = document.getElementsByClassName('banks__item');
  banksItem = Array.prototype.slice.call(banksItem);

  var popupBank = document.getElementsByClassName('popup-bank');
  var popupBankCloseBtn = document.getElementsByClassName('popup-bank__close-btn');

  var popupBankTitle = document.getElementById('popup-bank-title');
  var popupBankSubtitle = document.getElementById('popup-bank-subtitle');

  $(banksItem).click(function () {
    switch ($(this).data('bank')) {
      case 'sber':
        popupBankTitle.textContent = 'Вернём страхование в Сбербанке.';
        $(bankInput).val('Сбербанк');
        break;

      case 'rennesans':
        popupBankTitle.textContent = 'Вернём страхование в Ренессансе.';
        $(bankInput).val('Ренессанс');
        break;

      case 'pochta':
        popupBankTitle.textContent = 'Вернём страхование в Почта Банке.';
        $(bankInput).val('Почта Банк');
        break;

      case 'home':
        popupBankTitle.textContent = 'Вернём страхование в Хоум Кредит.';
        $(bankInput).val('Хоум Кредит');
        break;

      case 'alfa':
        popupBankTitle.textContent = 'Вернём страхование в Альфа банке.';
        $(bankInput).val('Альфа банк');
        break;

      case 'raiff':
        popupBankTitle.textContent = 'Вернём страхование в Райффайзенбанке.';
        $(bankInput).val('Райффайзенбанк');
        break;

      case 'unicredit':
        popupBankTitle.textContent = 'Вернём страхование в Юникредит банке.';
        $(bankInput).val('Райффайзенбанк');
        break;

      case 'rosbank':
        popupBankTitle.textContent = 'Вернём страхование в Росбанке.';
        $(bankInput).val('Росбанк');
        break;

      case 'sovkom':
        popupBankTitle.textContent = 'Вернём страхование в Совкомбанке.';
        $(bankInput).val('Совкомбанк');
        break;

      case 'otp':
        popupBankTitle.textContent = 'Вернём страхование в ОТП банке.';
        $(bankInput).val('ОТП');
        break;

      case 'tinkoff':
        popupBankTitle.textContent = 'Вернём страхование в Тинькофф банке.';
        $(bankInput).val('Тинькофф');
        break;

      default:
        popupBankTitle.textContent = 'Мы работаем со всеми банками России.';
        popupBankSubtitle.textContent = 'Если вашего банка нет в списке, оставьте заявку, мы вам перезвоним в течение 1 минуты.';
        $(bankInput).val('Другой банк');
        break;
    }
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupBank).fadeIn(300);
    }, 300);
  });

  $(popupBankCloseBtn).click(function () {
    $(popupBank).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
      popupBankSubtitle.textContent = 'Оставьте заявку, мы вам перезвоним в течение 1 минуты.';
    }, 300);
  });
  /* */
  /* пользователь пытаетс уйти */
  $(document).mouseleave(function() {
    console.log('ушел со страницы');
    //$.cookie('smartCookies', true, {
    //  expires: 7,
    //  path: '/'
    //});
  });
  /* */
  /*отображаем скрытые выписки*/
  var proofMoreBtn = document.getElementsByClassName('proof__more-btn');
  var proofMoreBtnField = document.getElementsByClassName('proof__more-btn-field');
  var proofItem = document.getElementsByClassName('proof__item');

  $(proofMoreBtn).click(function () {
    $(proofItem).removeClass('proof__item--hidden');
    $(proofItem).removeClass('proof__item--tablet');
    $(proofMoreBtnField).hide();
  });
  /* */
  /* отображаем отзывы */
  var feedbackImg = document.getElementsByClassName('feedback__img');

  var feedbackMoreBtn = document.getElementsByClassName('feedback__more-btn');
  var feedbackMoreBtnField = document.getElementsByClassName('feedback__more-btn-field');

  $(feedbackMoreBtn).click(function () {
    $(feedbackImg).removeClass('feedback__img--inactive');
    $(feedbackMoreBtnField).addClass('disable');
  });
  /* */
  /* отправка формы из popup callback */
  var callbackForm = $('#callback-form');

  callbackForm.submit(function (ev) {
    $.ajax({
      type: callbackForm.attr('method'),
      url: callbackForm.attr('action'),
      data: callbackForm.serialize(),
      success: function (data) {
        $(callbackInputName).val('');
        $(callbackInputPhone).val('');
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter45697713.reachGoal('popup-callback');
        fbq('track', 'Lead');
        gtag('event', 'popup-callback', {
          'event_category': 'popup',
          'event_action': 'callback',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из popup bank */
  var bankForm = $('#bank-form');

  bankForm.submit(function (ev) {
    $.ajax({
      type: bankForm.attr('method'),
      url: bankForm.attr('action'),
      data: bankForm.serialize(),
      success: function (data) {
        $(bankInputName).val('');
        $(bankInputPhone).val('');
        $(popupBank).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter45697713.reachGoal('popup-bank');
        fbq('track', 'Lead');
        gtag('event', 'popup-bank', {
          'event_category': 'popup',
          'event_action': 'bank',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*кнопка вернуть деньги в intro мобильная версия*/
  var introUtpButton = document.getElementsByClassName('intro__utp-button');

  $(introUtpButton).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });
  /* */
  /* отправка формы из intro-form */
  var introForm = $('#intro-form');

  introForm.submit(function (ev) {
    $.ajax({
      type: introForm.attr('method'),
      url: introForm.attr('action'),
      data: introForm.serialize(),
      success: function (data) {
        $(introInputName).val('');
        $(introInputPhone).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter45697713.reachGoal('form-intro');
        fbq('track', 'Lead');
        gtag('event', 'form-intro', {
          'event_category': 'form',
          'event_action': 'intro',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из seven-form-1 */
  var sevenForm1 = $('#seven-form-1');

  sevenForm1.submit(function (ev) {
    $.ajax({
      type: sevenForm1.attr('method'),
      url: sevenForm1.attr('action'),
      data: sevenForm1.serialize(),
      success: function (data) {
        $(sevenInputName1).val('');
        $(sevenInputPhone1).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter45697713.reachGoal('form-seven');
        fbq('track', 'Lead');
        gtag('event', 'form-seven', {
          'event_category': 'form',
          'event_action': 'seven',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из seven-form-1 */
  var sevenForm2 = $('#seven-form-2');

  sevenForm2.submit(function (ev) {
    $.ajax({
      type: sevenForm2.attr('method'),
      url: sevenForm2.attr('action'),
      data: sevenForm2.serialize(),
      success: function (data) {
        $(sevenInputName2).val('');
        $(sevenInputPhone2).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter45697713.reachGoal('form-seven');
        fbq('track', 'Lead');
        gtag('event', 'form-seven', {
          'event_category': 'form',
          'event_action': 'seven',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*валидация форм*/
  $(introInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(sevenInputPhone1).inputmask("+9 (999) 999-9999"); //specifying options
  $(sevenInputPhone2).inputmask("+9 (999) 999-9999"); //specifying options
  $(callbackInputPhone).inputmask("+9 (999) 999-9999"); //specifying options

  /*всплывающее меню при скролле вниз*/
  /*троттлинг функция*/
  function throttleFloating(func, ms) {

    var isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {

      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments); // (1)

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }
  /* */
  var travelMenu = document.getElementsByClassName('floating-menu');

  var hiddenMenuDown = function () {
    if (window.pageYOffset > 100) {
      $(travelMenu).addClass('floating-menu--active');
    } else {
      $(travelMenu).removeClass('floating-menu--active');
    }
  }

  var hiddenMenuDown100 = throttleFloating(hiddenMenuDown, 100);

  $(window).scroll(function () {
    hiddenMenuDown100();
  });
  /* */

  /* ПОДКЛЮЧАЕМ КАЛЬКУЛЯТОР!!!!!!!!!!!! */
  var popupCalc = document.getElementsByClassName('calc');
  var popupCalcCloseBtn = document.getElementsByClassName('calc__close-btn');
  var forQuizBtn = document.getElementsByClassName('forquiz__quiz-button');

  var inputPhoneFinal = document.getElementById('input-phone-final');

  var summaOutput = document.getElementById('summa-output');
  var fSumma = document.getElementById('summa-field');

  var strahovanieOutput = document.getElementById('strahovanie-output');
  var fStrahovanie = document.getElementById('strahovanie-field');

  function updateTextInput(val, output) {
    output.value = val;
  }

  function updateRangeValue(val, range) {
    range.value = val;
  }

  $(fSumma).on('propertychange input', function () {
    updateTextInput(this.value, summaOutput);
  });

  $(fStrahovanie).on('propertychange input', function () {
    updateTextInput(this.value, strahovanieOutput);
  });

  $(summaOutput).change(function () {
    updateRangeValue(this.value, fSumma);
  });

  $(strahovanieOutput).change(function () {
    updateRangeValue(this.value, fStrahovanie);
  });

  //открываем закрываем попап с квизом

  $(forQuizBtn).click(function() {
    var popupCalcTop = window.pageYOffset + 60 + 'px';
    $(popupCalc).css('top', popupCalcTop);
    $(overlay).fadeIn(300);
    setTimeout(function() {
      $(popupCalc).fadeIn(300);
    });
  });

  $(popupCalcCloseBtn).click(function() {
    $(popupCalc).fadeOut(300);
    setTimeout(function() {
      $(overlay).fadeOut(300);
    });
  });

  //progressbar

  var progressStage = document.getElementById('progress-stage');
  var progressBar = document.getElementById('progressbar');

  //stage 1

  var stage1 = document.getElementById('stage1');
  var stageRadiobtnDays = document.getElementsByClassName('stage__radiobtn--days');
  var next1 = document.getElementById('next1');

  var days;

  $(stageRadiobtnDays).click(function () {
    days = this.value;
    console.log(days);
  });

  $(next1).click(function () {
    if (days) {
      $(stage1).fadeOut(300);
      switch (days) {
        case 'меньше 14 дней назад':
          setTimeout(function () {
            $(cityP1).show();
            $(cityP3).hide();
            $(stageP131).fadeIn(300);
            $(progressBar).css('width', '40%');
            progressStage.textContent = '2';
            yaCounter45697713.reachGoal('less14');
          }, 300);
          break;

        case 'только готовлюсь брать':
          setTimeout(function () {
            $(cityP3).show();
            $(cityP1).hide();
            $(stageP131).fadeIn(300);
            $(progressBar).css('width', '40%');
            progressStage.textContent = '2';
            yaCounter45697713.reachGoal('more14');
          }, 300);
          break;

        case 'больше 14 дней назад':
          setTimeout(function () {
            $(stageP2Final).fadeIn(300);
            $(progressBar).css('width', '100%');
            progressStage.textContent = '5';
            yaCounter45697713.reachGoal('nottake');
          }, 300);
          break;

        default:
          break;
      }
    }
  });

  //stage 13-1

  var city;

  var stageP131 = document.getElementById('stage-p13-1');
  var cityP1 = document.getElementById('city-p1');
  var cityP3 = document.getElementById('city-p3');

  var cityInput = document.getElementById('city-input');

  var nextP131 = document.getElementById('nextP131');
  var backP131 = document.getElementById('backP131');

  $(nextP131).click(function () {
    if (cityInput.value) {
      city = cityInput.value;
      console.log(city);
      $(stageP131).fadeOut(300);
      switch (days) {
        case 'меньше 14 дней назад':
        $(bankP1).show();
        $(bankP3).hide();
        break;
        
        case 'только готовлюсь брать':
        $(bankP3).show();
        $(bankP1).hide();
        break;

        default:
        break;
      }

      setTimeout(function() {
        $(stageP132).fadeIn(300);
        $(progressBar).css('width', '60%');
        progressStage.textContent = '3';
      }, 300);
    }
  });

  $(backP131).click(function () {
    $(stageP131).fadeOut(300);
    setTimeout(function () {
      $(stage1).fadeIn(300);
      $(progressBar).css('width', '20%');
      progressStage.textContent = '1';
    }, 300);
  });
  
  //stage-p13-2
  var bank;

  var stageP132 = document.getElementById('stage-p13-2');

  var bankP1 = document.getElementById('bankP1');
  var bankP3 = document.getElementById('bankP3');

  var nextP132 = document.getElementById('nextP132');
  var backP132 = document.getElementById('backP132');

  var stageRadiobtnBank = document.getElementsByClassName('stage__radiobtn--bank');
  var stageTxtinputBank = document.getElementById('stage__txtinput--bank');

  $(stageRadiobtnBank).click(function() {
    bank = this.value;
    if (bank == 'другой банк') {
      bank = stageTxtinputBank.value;
    }
  });

  $(stageTxtinputBank).change(function() {
    bank = stageTxtinputBank.value;
  });

  $(nextP132).click(function() {
    if (bank) {
      console.log(bank);
      switch (days) {
        case 'меньше 14 дней назад':
        $(stageP132).fadeOut(function() {
          setTimeout(function() {
            $(stageP13).fadeIn(300);
            $(progressBar).css('width', '80%');
            progressStage.textContent = '4';
          }, 300);
        });
        break;
        
        case 'только готовлюсь брать':
        $(stageP132).fadeOut(function() {
          setTimeout(function() {
            $(stageP33).fadeIn(300);
            $(progressBar).css('width', '80%');
            progressStage.textContent = '4';
          }, 300);
        });
        break;

        default:
        break;
      }
    }
  });

  $(backP132).click(function () {
    $(stageP132).fadeOut(300);
    setTimeout(function () {
      $(stageP131).fadeIn(300);
      $(progressBar).css('width', '40%');
      progressStage.textContent = '2';
    }, 300);
  });

    //stage-p1-3
    var stageP13 = document.getElementById('stage-p1-3');

    var strahovanieOutput = document.getElementById('strahovanie-output');
  
    var strahovanie;
    var strahovanieMoreTrigger = 'менее 0.5 миллионов';
  
    var nextP13 = document.getElementById('nextP13');
    var backP13 = document.getElementById('backP13');
  
    var more05mlnField = document.getElementById('more05mln-field');
  
    $(more05mlnField).click(function() {
      if ($(this).prop('checked')) {
        strahovanieMoreTrigger = more05mlnField.value;
      } else {
        strahovanieMoreTrigger = 'менее 0.5 миллионов';
      }
    });
  
    $(nextP13).click(function() {
      strahovanie = strahovanieOutput.value;
      console.log(strahovanie);
      console.log(strahovanieMoreTrigger);
      $(stageP13).fadeOut(300);
      setTimeout(function() {
        alloptionsField.value = days + '\nГород: ' + city + '\nБанк: ' + bank + '\nНа какую сумму страховка: ' + strahovanie + '\n' + strahovanieMoreTrigger;
        $(stageP13Final).fadeIn(300);
        $(progressBar).css('width', '100%');
        progressStage.textContent = '5';
      }, 300);
    });
  
    $(backP13).click(function () {
      $(stageP13).fadeOut(300);
      setTimeout(function () {
        $(stageP132).fadeIn(300);
        $(progressBar).css('width', '60%');
        progressStage.textContent = '3';
      }, 300);
    });

  //stage-p3-3
  var stageP33 = document.getElementById('stage-p3-3');

  var summaOutput = document.getElementById('summa-output');

  var summa;
  var summaMoreTrigger = 'менее 1.5 миллионов';

  var nextP33 = document.getElementById('nextP33');
  var backP33 = document.getElementById('backP33');

  var more15mlnField = document.getElementById('more15mln-field');

  $(more15mlnField).click(function() {
    if ($(this).prop('checked')) {
      summaMoreTrigger = more15mlnField.value;
    } else {
      summaMoreTrigger = 'менее 1.5 миллионов';
    }
  });

  $(nextP33).click(function() {
    summa = summaOutput.value;
    console.log(summa);
    console.log(summaMoreTrigger);
    $(stageP33).fadeOut(300);
    setTimeout(function() {
      alloptionsField.value = days + '\nГород: ' + city + '\nБанк: ' + bank + '\nНа какую сумму кредит: ' + summa + '\n' + summaMoreTrigger;
      $(stageP13Final).fadeIn(300);
      $(progressBar).css('width', '100%');
      progressStage.textContent = '5';
    }, 300);
  });

  $(backP33).click(function () {
    $(stageP33).fadeOut(300);
    setTimeout(function () {
      $(stageP132).fadeIn(300);
      $(progressBar).css('width', '60%');
      progressStage.textContent = '3';
    }, 300);
  });

  //stage-p13-final

  var alloptionsField = document.getElementById('alloptions-field');

  var stageP13Final = document.getElementById('stage-p13-final');

  var backFinal = document.getElementById('backfinal');

  $(backFinal).click(function () {
    $(stageP13Final).fadeOut(300);
    setTimeout(function () {
      switch (days) {
        case 'меньше 14 дней назад':
        $(stageP13).fadeIn(300);
        break;

        case 'только готовлюсь брать':
        $(stageP33).fadeIn(300);
        break;

        default:
        break;
      }
      
      $(progressBar).css('width', '60%');
      progressStage.textContent = '3';
    }, 300);
  });

  //stage-p2-final

  var stageP2Final = document.getElementById('stage-p2-final');
  var backfail = document.getElementById('backfail');

  $(backfail).click(function () {
    $(stageP2Final).fadeOut(300);
    setTimeout(function () {
      $(stage1).fadeIn(300);
      $(progressBar).css('width', '20%');
      progressStage.textContent = '1';
    }, 300);
  });

  // stage-success
  var stageSuccess = document.getElementById('stage-success');

  //валидация номеров
  $(inputPhoneFinal).inputmask("+9 (999) 999-9999"); //specifying options

  /* form-final */
  var formFinal = $('#form-final');

  formFinal.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-calc.php',
      data: formFinal.serialize(),
      success: function (data) {
        yaCounter45697713.reachGoal('form-final');
        $(stageP13Final).fadeOut(300);
        setTimeout(function () {
          $(stageSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* */
  /*подмена номера и живосайта для Заура
  var dynamicPhone = document.getElementsByClassName('dynamic-phone');
  dynamicPhone = Array.prototype.slice.call(dynamicPhone);
  var envyScript = document.createElement('script');
  envyScript.type = "text/javascript";
  if (utmCampaign == 'poisk_zaur') {
    dynamicPhone.forEach(function(item, i) {
      item.textContent = '+7 (800) 551-64-90';
      $(item).attr('href', 'tel:+78005516490');
    });
    var envyZaur = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=b6eaba6284192a88a11185a465a22104';
    envyScript.src = envyZaur;
  } else {
    var envyCommon = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=d9dd414c35d9a22f2c97ed02d3d893e9';
    envyScript.src = envyCommon;
  }
  $("body").append(envyScript);
  */
});
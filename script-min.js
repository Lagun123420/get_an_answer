document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("button"),e=document.getElementById("button-1"),n=document.getElementById("result"),a=document.getElementById("result-1"),i=["Все буде добре, не хвилюйтесь.","Ви справитесь з цим, я вірю в вас.","У вас є всі необхідні навички та здібності.","Пам'ятайте, що кожен день новий шанс почати заново.","Не зупиняйтеся, рухайтеся вперед.","Вам вдасться подолати всі труднощі.","Ви сильніші, ніж ви думаєте.","Думайте позитивно, і позитивні зміни стануться.","Вам не самотньо, я тут, щоб підтримати вас.","Вірте в себе, і ви зможете досягти будь-якої мети.","Ви розумні та талановиті, і у вас є багато можливостей.","Не здавайтесь, навіть якщо це здається складним.","Завжди шукайте світлі сторони у житті.","Пам'ятайте, що ви сильніші за свої страхи.","Ви заслуговуєте на щастя і успіх.","Пам'ятайте, що все тимчасове, і це теж пройде.","Не бійтеся просити допомоги, коли вам потрібна підтримка.","У вас є сила подолати будь-які перешкоди.","Будьте люб'язними до себе, як до інших людей.","Ви здатні на більше, ніж ви думаєте.","Вірте в себе, і світ стане вашим союзником.","Нехай кожен день приносить вам нові можливості.","Усміхайтеся, навіть якщо вам важко. Усміхнення робить дива.","Не здавайтеся, ваша наполеглива праця принесе результати.","Сконцентруйтесь на прогресі, а не на перфекціонізмі.","Вам не потрібно бути ідеальним, просто бути собою.","Пам'ятайте, що кожен день ви зростаєте і розвиваєтеся.","Ваше щастя залежить від ваших думок і дій.","Будьте вдячні за всі маленькі радості у житті.","Ви унікальні і особливі, прийміть себе таким, який ви є.","Дозвольте собі відпочити і відновити сили.","Пам'ятайте, що ви не одні у своїх змаганнях.","Визнайте свої досягнення і відзначте їх.","Відводьте час для догляду за собою та своїми емоціями.","Довіряйте процесу та приймайте невідомість.","Не дозволяйте негативу контролювати ваше життя.","Нехай кожен день стане новим початком.","Вірте в свої можливості і йдіть вперед.","Ви унікальні та здатні на великі речі.","Уявіть собі успіх і працюйте над ним.","Ваше щастя і благополуччя в ваших руках.","Повірте, що ви можете змінити своє життя на краще.","Не забувайте святкувати свої досягнення.","Нехай кожен день наповнений надією та оптимізмом.","Пам'ятайте, що ви ростете і розвиваєтесь у своєму темпі.","Ви здатні подолати будь-які труднощі, з якими зіштовхнетеся.","Дбайте про своє фізичне та емоційне благополуччя.","Ви заслуговуєте любові та поваги.","Уявіть собі успіх і рухайтесь до нього.","Ваше щастя і добробут у ваших руках.","Не забувайте підтримувати себе іншими."],o=["Так","Звичайно","Безумовно","Так, звісно","Абсолютно","Точно","Правильно","Безперечно","Саме так","Згоден","Немає сумнівів","Так і є","Це так","Справді","Позитивно","Вірно","Ясно","Напевно","Так, безумовно","Зрозуміло","Ні","Анітрохи","Зовсім ні","Ні в якому разі","Недолік","Не погоджуюсь","Категорично ні","Рішуче ні","Сперечаюсь","Абсолютно ні","Відмовляюсь","Ні, звичайно","Дуже сумніваюсь","Не згоден","Точно ні","Ні, ні і ні","Ні за що","Це неправда","Не впевнений","Можливо","Скоріше за все","Не можу сказати точно","Затруднююсь відповісти","Складно сказати","Не можу стверджувати","Мабуть","Може бути","Схоже","Все може бути","Не впевнений","Трапляється","Не можу підтвердити","Важко визначитись","Не завжди ясно"],d=i.length-1;function l(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function s(){let t=l(0,d);n.innerHTML=i[t],n.style.animation="fadeIn 1s"}function u(){let t=l(0,d);a.innerHTML=o[t],a.style.animation="fadeIn 1s"}null!==t&&t.addEventListener("click",(()=>{n.style.animation="fadeOut 1s",t.style.animation="fadeOut 1s",setTimeout((()=>{t.style.animation="fadeIn 1s"}),1e3),setTimeout(s,1e3)})),null!==e&&e.addEventListener("click",(()=>{a.style.animation="fadeOut 1s",e.style.animation="fadeOut 1s",setTimeout((()=>{e.style.animation="fadeIn 1s"}),1e3),setTimeout(u,1e3)}))}));
# Модель прецедентів

## 1. Загальна схема:

@startuml

    actor "Гість" as Guest
    actor "Користувач" as User
    actor "Адміністратор" as Administrator

    usecase "<b>GuestSearch</b>\nПошук даних" as GuestSearch
    usecase "<b>GuestDowload</b>\nЗавантаження даних на комп'ютер" as GuestDowload
    usecase "<b>UserRegistration</b>\nРеєстрація у системі" as UserRegistration
    usecase "<b>UserLogin</b>\nВхід у систему" as UserLogin
    usecase "<b>DataInteraction</b>\nВзаємодія з даними" as DataInteraction
    usecase "<b>DataManagement</b>\nРегулювання даних у системі" as DataManagement
    usecase "<b>UserInteraction</b>\nВзаємодія з користувачами" as UserInteraction

    User -u-> Guest
    Administrator -u-> User

    Guest -u-> GuestSearch
    Guest -u-> GuestDowload

    User -u->  UserRegistration
    User -l->  UserLogin
    User -r->  DataInteraction

    Administrator -r-> DataManagement
    Administrator -l-> UserInteraction

@enduml

## 1.1 Гість:

@startuml

    actor "Гість" as Guest

    usecase "<b>GuestSearch</b>\nПошук даних" as GuestSearch
    usecase "<b>GuestDowload</b>\nЗавантаження даних на комп'ютер" as GuestDowload

    Guest -u-> GuestSearch
    Guest -u-> GuestDowload

@enduml 

## 1.2 Користувач:

@startuml

    actor "Користувач" as User

    usecase "<b>UserRegistration</b>\nРеєстрація у системі" as UserRegistration
    usecase "<b>UserLogin</b>\nВхід у систему" as UserLogin
    usecase "<b>DataInteraction</b>\nВзаємодія з даними" as DataInteraction
    usecase "<b>DataVisulization</b>\nВізуалізація даних" as DataVisulization
    usecase "<b>DataUpload</b>\nЗавантаження даних у систему" as DataUpload
    usecase "<b>UserDataDelete</b>\nВидалення власних даних користувачем" as UserDataDelete
    usecase "<b>DataModification</b>\nРедагування даних" as DataModification


    User -l-> UserRegistration
    User -r-> UserLogin
    User -u-> DataInteraction

    DataInteraction <.l. DataVisulization:extends
    DataInteraction <.u. DataUpload:extends
    DataInteraction <.u. UserDataDelete:extends
    DataInteraction <.r. DataModification:extends

@enduml

## 1.3 Адміністратор:

@startuml

    actor "Адміністратор" as Administrator

    usecase "<b>AdminLogin</b>\nВхід адміністратора у систему" as AdminLogin
    usecase "<b>AdminLogout</b>\nВихід адміністратора з системи" as AdminLogout
    usecase "<b>DataManagement</b>\nРегулювання даних у системі" as DataManagement
    usecase "<b>DataDelete</b>\nВидалення даних з системи" as DataDelete
    usecase "<b>DataUpload</b>\nЗавантаження даних у систему" as DataUpload
    usecase "<b>UserInteraction</b>\nВзаємодія з користувачами" as UserInteraction
    usecase "<b>UserBlock</b>\nБлокування користувача системи" as UserBlock
    usecase "<b>UserDelete</b>\nВидалення користувача з системи" as UserDelete


    Administrator -l-> DataManagement
    Administrator -u-> AdminLogin
    Administrator -u-> AdminLogout
    Administrator -r-> UserInteraction

    DataManagement <.u. DataDelete:extends
    DataManagement <.d. DataUpload:extends

    UserInteraction <.u. UserBlock:extends
    UserInteraction <.d. UserDelete:extends

@enduml

## 2.1 Сценарії користування гостя:

| **ID:**                | GuestSearch                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Отримання інформації або даних гостем у системі через пошуковий бар |
| **УЧАСНИКИ:**          | Гість, Система |
| **ПЕРЕДУМОВИ:**        | Гість не має відповідних даних на головній сторінці |
| **РЕЗУЛЬТАТ:**         | Знаходження відповідної інформації та даних у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Введені пошукові дані не відповідають з наявними у системі - DataNotFinded |
@startuml


    |Гість|
    start;
    : Натискає на пошуковий бар.;
    : Вводить назву даних чи опис інформації.;

    |Система|
    : Перевіряє наявність відповідних даних у базі даних.
    <font color="red"><b> DataNotFinded;

    : Перенаправляє гостя на сторінку з відповідними даними.;

    |Гість|
    stop;
    
@enduml


| **ID:**                | GuestDownload                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження гостем файлу даних з системи |
| **УЧАСНИКИ:**          | Гість, Система |
| **ПЕРЕДУМОВИ:**        | Гість не має файлу даних з системи |
| **РЕЗУЛЬТАТ:**         | Завантаження файлу з даними у відповідному форматі з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відповідного формату файлу з даними не існує в системі - DataFormatNotAvailable <br/> Швидкість завантаження та якість під'єднання не дозволяють завантажити файл - BadConnection|

@startuml

    |Гість|
    start;
    : Натискає на кнопку "Завантажити" на сторінці з даними.;
    : Обирає формат даних файлу, який йому потрібно завантажити.;

    |Система|
    : Шукає відповідний формат файлу у базах даних.
    <font color="red"><b> DataFormatNotAvailable;

    : Розпочинає передачу файлу на комп'ютер користувача системи у відповідному форматі.;
    : Виводить на екран користувача прогрес завантаження файлу у відсотках.;
    : Успішно закінчує завантаження файлу на комп'ютер користувача.
    <font color="red"><b> BadConnection;

    : Виводить на екран користувача інформацію, що файл успішно завантажено.;

    |Гість|
    stop;
    
@enduml

## 2.2 Сценарії користування користувача:

| **ID:**                | UserRegistration                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Реєстрація акаунту користувача у системі |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач не має облікового запису у системі |
| **РЕЗУЛЬТАТ:**         | Успішна реєстрація облікового запису користувачем у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті для обов'язкового заповнення рядки для реєстрації у системі - UnfilledRegistrationRows <br/> Введене ім'я користувачем не відповідає умовам реєстрації - IncorrectUserName <br/> Введений пароль користувачем не відповідає умовам реєстрації - IncorrectUserPassword <br/> Даний користувач вже зареєстрований у системі - UserHasExist|

@startuml

    |Користувач|
    start;
    : Вибирає опцію "Реєстрація" на головній сторінці веб-сайту.;

    |Система|
    : Перенаправляє користувача на сторінку з формою реєстрації.;

    |Користувач|
    : Заповнює обов'язкові поля реєстраційної форми.;
    : Надсилає форму реєстрації до системи.;

    |Система|
    : Перевіряє, чи введені дані є унікальними та відповідають умовам реєстрації.
    <font color="red"><b> UnfilledRegistrationRows
    <font color="red"><b> IncorrectUserName
    <font color="red"><b> IncorrectUserPassword
    <font color="red"><b> UserHasExist;

    : Додає введені дані користувачем у базу даних.;
    : Повідомляє користувача про успішну реєстрацію.;
    : Надсилає відповідний лист з успішною реєстрацією на електрону скринку користувача.;
    : Перенаправляє користувача на сторінку створеного облікового запису.;

    |Користувач|
    stop;
    
@enduml

| **ID:**                | UserLogin                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вхід користувача у систему |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач не війшов у систему |
| **РЕЗУЛЬТАТ:**         | Успішний вхід користувача у систему |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті для обов'язкового заповнення рядки для входу у систему - UnfilledRegistrationRows <br/> Введене ім'я користувачем не існує у базах даних - UserNotExist <br/> Введене ім'я у поле некоректне - UserNameNotCorrect <br/> Введений пароль не відповідає користувачу у базі даних - UserPasswordWrong <br/> Введений пароль у поле некоректний - UserPasswordNotCorrect |

@startuml

    |Користувач|
    start;
    : Вибирає опцію "Вхід" на головній сторінці веб-сайту.;

    |Система|
    : Перенаправляє користувача на сторінку з формою входу.;

    |Користувач|
    : Заповнює поля логіну та паролю форми.;
    : Надсилає форму входу до системи.;

    |Система|
    : Перевіряє, чи є введені дані правильними.
    <font color="red"><b> UnfilledRegistrationRows
    <font color="red"><b> UserNotExist
    <font color="red"><b> UserNameNotCorrect
    <font color="red"><b> UserPasswordWrong
    <font color="red"><b> UserPasswordNotCorrect;

    : Повідомляє користувача про успішний вхід у систему.;
    : Перенаправляє користувача на сторінку облікового запису.;

    |Користувач|
    stop;
    
@enduml

| **ID:**                | DataVisulization                                                                                 |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Візуалізація та графічне представлення даних |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач не має відповідного графічного представлення даних |
| **РЕЗУЛЬТАТ:**         | Успішне відображення даних у відповідному графічному вигляді |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Система не має можливості відображати дані у певному форматі графічного представлення - DataVisualizationFormatNotAvailable|

@startuml

    |Користувач|
    start;
    : Обирає опцію "Вибір візуалізації" під даними.;

    |Система|
    : Відображає доступні види візуалізації даних.;

    |Користувач|
    : Обирає тип візуалізації даних.;

    |Система|
    : Перевіряє, чи тип візуалізації обраний користувачем доступний.
    <font color="red"><b> DataVisualizationFormatNotAvailable;

    : Відображає дані у графічному вигляді на екрані користувача.;

    |Користувач|
    stop;
    
@enduml

| **ID:**                | DataModification                                                                                 |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Відображення даних у відповідному форматі, який обран користувачем  |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Дані надані системою мають стандартний вигляд та не відповідають баченню користувача |
| **РЕЗУЛЬТАТ:**         | Успішне редактування та управління даними користувачем. Збереження змінених даних у профілі користувача. |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Система не має можливості змінити дані у режимі редагування, так як бажає користувач - DataModificationNotSupported <br/> Користувач не зареєстрований у системі - UserNotRegistred |

@startuml

    |Користувач|
    start;
    : Обирає опцію "Редагування даних".;

    |Система|
    : Перевіряє чи користувач зареєстрований.
    <font color="red"><b> UserNotRegistred;

    |Користувач|
    : Вибирає конкретний запис або елемент даних, який він бажає змінити, та відкриває його для редагування.;

    |Система|
    : Відображає поточні дані цього запису у формі або на панелі редагування.;

    |Користувач|
    : Редагує необхідні поля або додає нову інформацію у дані.;
    : Натискає кнопку "Зберегти".;

    |Система|
    : Перевіряє правильність формату даних.
    <font color="red"><b> DataModificationNotSupported;

    : Зберігає оновлену інформацію у базі даних.;
    : Повідомляє користувача про успішне збереження даних.;

    |Користувач|
    stop;
    
@enduml

| **ID:**                | DataUpload                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження даних користувачем у систему |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Система управління відкритими даними дозволяє завантажувати нові дані користувачем у системиу |
| **РЕЗУЛЬТАТ:**         | Успішне завантаження та публікація нових даних у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Формат даних не відповідає вимогам системи - DataFormatNotSupported <br/> Користувач не зареєстрований у системі - UserNotRegistred |

@startuml

    |Користувач|
    start;
    : Переходить до розділу або сторінки, призначеної для завантаження нових даних.;

    |Система|
    : Перевіряє чи користувач зареєстрований.
    <font color="red"><b> UserNotRegistred;

    : Перенаправляє користувача на розділ для завантаження даних.;

    |Користувач|
    : Натискає на кнопку "Завантажити нові дані".;
    
    |Система|
    : Відображає форму для завантаження даних.;

    |Користувач|
    : Натискає кнопку "Оберіть файл".;
    : Вибирає файл із свого комп'ютера для завантаження.;
    
    |Система|
    : Перевіряє формат файлу та структуру даних.
    <font color="red"><b> DataFormatNotSupported;

    |Користувач|
    : Натискає кнопку "ОК" після підтвердження параметрів.;

    |Система|
    : Обробляє завантажені дані та зберігає їх у системній базі даних.;
    : Відправляє повідомлення користувачу про успішне завантаження.;

    |Користувач|
    stop;
    
@enduml

| **ID:**                | UserDataDelete                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Видалення власних даних користувачем з системи |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Власні дані підлягають видаленню з системи |
| **РЕЗУЛЬТАТ:**         | Успішне видалення даних користувачем з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає дозволу для видалення даних з системи - NotHaveDeletePermission |

@startuml

    |Користувач|
    start;
    : Переходить до розділу з власними завантаженими даними.;

    |Система|
    : Перенаправляє користувача на розділ з даними користувача.;

    |Користувач|
    : Обирає файл з даними.;
    : Натискає на кнопку "Видалити дані".;

    |Система|
    : Перевіряє чи у користувача є дозвіл для видалення цих даних.
    <font color="red"><b> UserNotHaveDeletePermission;
    : Виводить підтверджуюче повідомлення про видалення даних користувачу.;

    |Користувач|
    : Натискає кнопку "Так. Підтверджую".;
    
    |Система|
    : Перевіряє, чи підтвердив користувач власні дії.
    <font color="red"><b> NotConfirmed;

    : Видаляє дані з бази даних системи.;
    : Повідомляє користувача про успішне видалення даних з системи.;

    |Користувач|
    stop;
    
@enduml

## 2.3 Сценарії користування адміністратора:

| **ID:**                | AdminLogin                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вхід адміністратора у систему |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Адміністратор не має адміністраторських прав у системі |
| **РЕЗУЛЬТАТ:**         | Успішний вхід адміністратора у систему |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Введений пароль не відповідає у базі даних - AdminPasswordWrong <br/> Введений у поле пароль некоректний - AdminPasswordNotCorrect <br/> Користувач немає адміністраторських прав - UserNotHaveAdminRights |

@startuml

    |Адміністратор|
    start;
    : Натискає кнопку "Вхід у систему як адміністратор" на сторінці власного облікового запису.;

    |Система|
    : Запитує адміністраторський пароль у користувача.;

    |Адміністратор|
    : Вводить адміністраторський пароль у відповідне поле.;
    : Натискає кнопку "Увійти".;

    |Система|
    : Перевіряє, чи є введені дані правильними.
    <font color="red"><b> AdminPasswordWrong
    <font color="red"><b> AdminPasswordNotCorrect
    <font color="red"><b> UserNotHaveAdminRights;

    : Наділяє правами адміністратора для користувача.;
    : Повідомляє адміністратора про успішне отримання адміністраторських прав.;

    |Адміністратор|
    stop;
    
@enduml

| **ID:**                | AdminLogout                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вихід адміністратора з системи |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Припинення користування адміністраторськими правами |
| **РЕЗУЛЬТАТ:**         | Успішний вихід адміністратора з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Адміністратор не завершив активні процеси - ProcessesAreNotFinished <br/> Дія непідтвердженна - NotConfirmed |

@startuml

    |Адміністратор|
    start;
    : Натискає кнопку "Вийти з системи як адміністратор" на панелі адміністрування.;

    |Система|
    : Перевіряє чи адміністратор завершив усі процеси.
    <font color="red"><b> ProcessesAreNotFinished;

    : Виводить підверджуюче вікно для виходу з адміністраторських прав.;

    |Адміністратор|
    : Натискає кнопку "Так. Вийти".;

    |Система|
    : Перевіряє, чи підтвердив користувач власні дії.
    <font color="red"><b> NotConfirmed;

    : Забирає права адміністрування у адміністратора.;

    |Адміністратор|
    stop;
    
@enduml

| **ID:**                | DataDelete                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Видалення даних завантажені користувачами системи |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Деякі дані не відповідають вимогам якості даних у системі |
| **РЕЗУЛЬТАТ:**         | Успішне видалення даних з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Дані які намагаються видалити не існує в базах даних - DataDoesNotExist <br/> Дія непідтвердженна - NotConfirmed|

@startuml

    |Адміністратор|
    start;
    : входить до системи за допомогою свого адміністраторського облікового запису.;
    : переходить до розділу де можна переглядати та керувати даними.;

    |Система|
    : Перенаправляє користувача на розділ для керування даними.;

    |Адміністратор|
    : Натискає на кнопку "Управління даними".;
    : Вводить у пошуковий бар запис чи елемент даних.;

    |Система|
    : Перевіряє чи є у базах даних відповідні дані
    <font color="red"><b> DataDoesNotExist;

    : Виводить відповідні дані на панелі адміністратора.;

    |Адміністратор|
    : Натискає кнопку "Видалити дані".;
    
    |Система|
    : Виводить підтверджуюче повідомлення.;

    |Адміністратор|
    : Натискає кнопку "Так. Підтверджую".;

    |Система|
    : Перевіряє, чи підтвердив користувач власні дії.
    <font color="red"><b> NotConfirmed;

    : Видаляє дані з бази даних.;
    : Повідомляє адміністратора про успішну операцію видалення.;

    |Адміністратор|
    stop;
    
@enduml

| **ID:**                | DataUpload                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження даних адміністратором у систему |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Система управління відкритими даними дозволяє завантажувати нові дані адміністраторами у систему |
| **РЕЗУЛЬТАТ:**         | Успішне завантаження та публікація нових даних у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Формат даних не відповідає вимогам системи - DataFormatNotSupported <br/> Адміністратор не увійшов у систему - AdministratorNotLogged |

@startuml

    |Адміністратор|
    start;
    : Переходить у адміністраторський розділ;

    |Система|
    : Перевіряє чи адміністратор увійшов у систему.
    <font color="red"><b> AdministratorNotLogged;

    : Перенаправляє адміністратора на панель для адміністрування.;

    |Адміністратор|
    : Натискає на кнопку "Завантажити нові дані".;
    
    |Система|
    : Відображає форму для завантаження даних.;

    |Адміністратор|
    : Натискає кнопку "Оберіть файл".;
    : Вибирає файл із свого комп'ютера для завантаження.;
    
    |Система|
    : Перевіряє формат файлу та структуру даних.
    <font color="red"><b> DataFormatNotSupported;

    |Адміністратор|
    : Натискає кнопку "ОК" після підтвердження параметрів.;

    |Система|
    : Обробляє завантажені дані та зберігає їх у системній базі даних.;
    : Відправляє повідомлення адміністратору про успішне завантаження.;

    |Адміністратор|
    stop;
    
@enduml

| **ID:**                | UserBlock                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Заблокування користувача системи на визначений час |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Порушення вимог користування системою користувачем |
| **РЕЗУЛЬТАТ:**         | Успішне блокування користувача на визначений час |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті поля у формі блокування - UnfilledFormRows <br/> Користувача не існує у системі - UserDoesNotExist <br/> Користувач вже заблокований у системі - UserHasBlocked <br/>  Дія непідтвердженна - NotConfirmed|

@startuml

    |Адміністратор|
    start;
    : Входить до системи за допомогою свого адміністраторського облікового запису.;
    : Переходить на персональну сторінку користувача системи.;

    |Система|
    : Перенаправляє адміністратора на обліковий запис користувача.;

    |Адміністратор|
    : Обирає опцію "Блокування Користувача" під персональним профілем користувача.;

    |Система|
    : Виводить форму блокування користувача.;

    |Адміністратор|
    : Вводить дані у поля для заповнення.;
    : Натискає кнопку "Заблокувати користувача" під формою блокування.;
    
    |Система|
    : Перевіряє чи всі поля правильно заповнені та чи вже заблокований користувач.
    <font color="red"><b> UnfilledFormRows
    <font color="red"><b> UserDoesNotExist
    <font color="red"><b> UserHasBlocked;

    : Відображає підтверджуюче повідомлення адміністратору.

    |Адміністратор|
    : Натискає кнопку "Так. Підтверджую".;

    |Система|
    : Перевіряє, чи підтвердив адміністратор власні дії.
    <font color="red"><b> NotConfirmed;

    : Блокує користувача у користуванні системою на строк зазначений адміністратором.;
    : Повідомляє адміністратора про успішне блокування користувача.;

    |Адміністратор|
    stop;
    
@enduml

| **ID:**                | UserDelete                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Видалення користувача з системи |
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Порушення вимог користування системою користувачем |
| **РЕЗУЛЬТАТ:**         | Успішне видалення користувача з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті поля у формі видалення - UnfilledFormRows <br/> Користувача не існує у системі - UserDoesNotExist <br/>  Дія непідтвердженна - NotConfirmed |

@startuml

    |Адміністратор|
    start;
    : Входить до системи за допомогою свого адміністраторського облікового запису.;
    : Переходить на персональну сторінку користувача системи.;

    |Система|
    : Перенаправляє адміністратора на обліковий запис користувача.;

    |Адміністратор|
    : Обирає опцію "Видалення Користувача" під персональним профілем користувача.;

    |Система|
    : Виводить форму видалення користувача.;

    |Адміністратор|
    : Вводить дані у поля для заповнення.;
    : Натискає кнопку "Видалити користувача" під формою видалення.;
    
    |Система|
    : Перевіряє чи всі поля правильно заповнені та чи існує користувач у базах даних.
    <font color="red"><b> UnfilledFormRows
    <font color="red"><b> UserDoesNotExist;

    : Відображає підтверджуюче повідомлення адміністратору.;

    |Адміністратор|
    : Натискає кнопку "Так. Підтверджую".;

    |Система|
    : Перевіряє, чи підтвердив адміністратор власні дії.
    <font color="red"><b> NotConfirmed;

    : Видаляє користувача з системи.;
    : Повідомляє адміністратора про успішне видалення користувача.;

    |Адміністратор|
    stop;
    
@enduml
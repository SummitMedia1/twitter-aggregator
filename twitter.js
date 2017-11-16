// DU Boot Camp Liri assignment week 10
// Vondy McFarlane

const request = require('request');
const fs = require('fs');
const Twitter = require('twitter');
const jsonfile = require('jsonfile');
//const Moment = require('moment');
// var Spotify = require('node-spotify-api');
//arrign variables to argument's array elements

// var startDate = new Date('Oct 30 2017 19:32:25');
// var endDate   = new Date('Nov 06 2017 21:32:25');
var nodeArgv  = process.argv;
var command   = process.argv[2];
var maleCnt   = 0;
var femaleCnt = 0;
var otherCnt  = 0;
var posWords  = 0;
var negWords  = 0;
var neuWords  = 0;
var blankWords = 0;
var tPosWords = 0;
var tNegWords = 0;
var tNeuWords = 0;
//var tBlankWords = 0;
var hashtagArray = [];
var comma = '&#x2C';
//************************************

 
//var searchCreteria = '#colorado';
// var searchCreteria =  'android';
//var searchCreteria =  "apple";
var searchCreteria = 'stock market';
//var searchCreteria = 'tax cut';
// var searchCreteria = 'tax';
// var searchCreteria = 'trump';
//***********************************
var initFile = false;
var datafile = './' + searchCreteria.replace(/[^a-zA-Z]/g,'') + '.json';
var datasummary = './' + searchCreteria.replace(/[^a-zA-Z]/g,'') + 'summary.json';
//=============================

//=============================================== Name arrays starts here ===============================================================
var menNames=['aaron','abdul','abe','abel','abraham','abram','adalberto','adam','adan','adolfo','adolph','adrian','agustin','ahmad','ahmed','aiden','al','alan','albert','alberto','alden','aldo','alec','alejandro','alex','alexander','alexis','alfonso','alfonzo','alfred','alfredo','ali','allan','allen','alonso','alonzo','alphonse','alphonso','alton','alva','alvaro','alvin','amado','ambrose','amos','anderson','andre','andrea','andreas','andres','andrew','andy','angel','angelo','anibal','anthony','antione','antoine','anton','antone','antonia','antonio','antony','antwan','archie','arden','ariel','arlen','arlie','armand','armando','arnold','arnoldo','arnulfo','aron','arron','art','arthur','arturo','asa','asher','ashley','aubrey','august','augustine','augustus','aurelio','austin','avery','ayden','barney','barrett','barry','bart','barton','basil','beau','ben','benedict','benito','benjamin','bennett','bennie','benny','bentley','benton','bernard','bernardo','bernie','berry','bert','bertram','bill','billie','billy','blaine','blair','blake','bo','bob','bobbie','bobby','booker','boris','boyce','boyd','brad','bradford','bradley','bradly','brady','brain','branden','brandon','brant','brayden','brendan','brendon','brent','brenton','bret','brett','brian','brice','britt','brock','broderick','brooks','bruce','bruno','bryan','bryant','bryce','bryon','bryson','buck','bud','buddy','buford','burl','burt','burton','buster','byron','caleb','calvin','cameron','carey','carl','carlo','carlos','carlton','carmelo','carmen','carmine','carol','carrol','carroll','carson','carter','cary','casey','cecil','cedric','cedrick','cesar','chad','chadwick','chance','chang','charles','charley','charlie','chas','chase','chauncey','chester','chet','chi','chong','chris','christian','christoper','christopher','chuck','chung','clair','clarence','clark','claud','claude','claudio','clay','clayton','clement','clemente','cleo','cletus','cleveland','cliff','clifford','clifton','clint','clinton','clyde','cody','colby','cole','coleman','colin','collin','colton','columbus','connie','connor','conrad','cooper','cordell','corey','cornelius','cornell','cortez','cory','courtney','coy','craig','cristobal','cristopher','cruz','curt','curtis','cyril','cyrus','dale','dallas','dalton','damian','damien','damion','damon','dan','dana','dane','danial','daniel','danilo','dannie','danny','dante','darell','daren','darin','dario','darius','darnell','daron','darrel','darrell','darren','darrick','darrin','darron','darryl','darwin','daryl','dave','david','davis','dean','deandre','deangelo','dee','del','delbert','delmar','delmer','demarcus','demetrius','denis','dennis','denny','denver','deon','derek','derick','derrick','deshawn','desmond','devin','devon','dewayne','dewey','dewitt','dexter','dick','diego','dillon','dino','dion','dirk','domenic','domingo','dominic','dominick','dominique','don','donald','dong','donn','donnell','donnie','donny','donovan','donte','dorian','dorsey','doug','douglas','douglass','doyle','drew','duane','dudley','duncan','dustin','dusty','dwain','dwayne','dwight','dylan','earl','earle','earnest','easton','ed','eddie','eddy','edgar','edgardo','edison','edmond','edmund','edmundo','eduardo','edward','edwardo','edwin','efrain','efren','elbert','elden','eldon','eldridge','eli','elias','elijah','eliseo','elisha','elliot','elliott','ellis','ellsworth','elmer','elmo','eloy','elroy','elton','elvin','elvis','elwood','emanuel','emerson','emery','emil','emile','emilio','emmanuel','emmett','emmitt','emory','enoch','enrique','erasmo','eric','erich','erick','erik','erin','ernest','ernesto','ernie','errol','ervin','erwin','esteban','ethan','eugene','eugenio','eusebio','evan','everett','everette','ezekiel','ezequiel','ezra','fabian','faustino','fausto','federico','felipe','felix','felton','ferdinand','fermin','fernando','fidel','filiberto','fletcher','florencio','florentino','floyd','forest','forrest','foster','frances','francesco','francis','francisco','frank','frankie','franklin','franklyn','fred','freddie','freddy','frederic','frederick','fredric','fredrick','freeman','fritz','gabriel','gail','gale','galen','garfield','garland','garret','garrett','garry','garth','gary','gaston','gavin','gayle','gaylord','genaro','gene','geoffrey','george','gerald','geraldo','gerard','gerardo','german','gerry','gil','gilbert','gilberto','gino','giovanni','giuseppe','glen','glenn','gonzalo','gordon','grady','graham','graig','grant','granville','grayson','greg','gregg','gregorio','gregory','greyson','grover','guadalupe','guillermo','gus','gustavo','guy','hai','hal','hank','hans','harlan','harland','harley','harold','harris','harrison','harry','harvey','hassan','hayden','haywood','heath','hector','henry','herb','herbert','heriberto','herman','herschel','hershel','hilario','hilton','hipolito','hiram','hobert','hollis','homer','hong','horace','horacio','hosea','houston','howard','hoyt','hubert','hudson','huey','hugh','hugo','humberto','hung','hunter','hyman','ian','ignacio','ike','ira','irvin','irving','irwin','isaac','isaiah','isaias','isiah','isidro','ismael','israel','isreal','issac','ivan','ivory','jace','jacinto','jack','jackie','jackson','jacob','jacques','jae','jaime','jake','jamaal','jamal','jamar','jame','jamel','james','jamey','jamie','jamison','jan','jared','jarod','jarred','jarrett','jarrod','jarvis','jason','jasper','javier','jaxon','jaxson','jay','jayden','jayson','jc','jean','jed','jeff','jefferey','jefferson','jeffery','jeffrey','jeffry','jerald','jeramy','jere','jeremiah','jeremy','jermaine','jerold','jerome','jeromy','jerrell','jerrod','jerrold','jerry','jess','jesse','jessie','jesus','jewel','jewell','jim','jimmie','jimmy','joan','joaquin','jody','joe','joel','joesph','joey','john','johnathan','johnathon','johnie','johnnie','johnny','johnson','jon','jonah','jonas','jonathan','jonathon','jordan','jordon','jorge','jose','josef','joseph','josh','joshua','josiah','jospeh','josue','juan','jude','judson','jules','julian','julio','julius','junior','justin','kareem','karl','kasey','keenan','keith','kelley','kelly','kelvin','ken','kendall','kendrick','keneth','kenneth','kennith','kenny','kent','kenton','kermit','kerry','keven','kevin','kieth','kim','king','kip','kirby','kirk','korey','kory','kraig','kris','kristofer','kristopher','kurt','kurtis','kyle','lacy','lamar','lamont','lance','landon','lane','lanny','larry','lauren','laurence','lavern','laverne','lawerence','lawrence','lazaro','leandro','lee','leif','leigh','leland','lemuel','len','lenard','lenny','leo','leon','leonard','leonardo','leonel','leopoldo','leroy','les','lesley','leslie','lester','levi','lewis','liam','lincoln','lindsay','lindsey','lino','linwood','lionel','lloyd','logan','lon','long','lonnie','lonny','loren','lorenzo','lou','louie','louis','lowell','loyd','lucas','luciano','lucien','lucio','lucius','luigi','luis','luke','lupe','luther','lyle','lyman','lyndon','lynn','lynwood','mac','mack','major','malcolm','malcom','malik','man','manual','manuel','marc','marcel','marcelino','marcellus','marcelo','marco','marcos','marcus','margarito','maria','mariano','mario','marion','mark','markus','marlin','marlon','marquis','marshall','martin','marty','marvin','mary','mason','mateo','mathew','matt','matthew','maurice','mauricio','mauro','max','maximo','maxwell','maynard','mckinley','mel','melvin','merle','merlin','merrill','mervin','micah','michael','michal','michale','micheal','michel','mickey','miguel','mike','mikel','milan','miles','milford','millard','milo','milton','minh','miquel','mitch','mitchel','mitchell','modesto','mohamed','mohammad','mohammed','moises','monroe','monte','monty','morgan','morris','morton','mose','moses','moshe','murray','myles','myron','napoleon','nathan','nathanael','nathanial','nathaniel','neal','ned','neil','nelson','nestor','neville','newton','nicholas','nick','nickolas','nicky','nicolas','nigel','noah','noble','noe','noel','nolan','norbert','norberto','norman','normand','norris','numbers','octavio','odell','odis','olen','olin','oliver','ollie','omar','omer','oren','orlando','orval','orville','oscar','osvaldo','oswaldo','otha','otis','otto','owen','pablo','palmer','paris','parker','pasquale','pat','patricia','patrick','paul','pedro','percy','perry','pete','peter','phil','philip','phillip','pierre','porfirio','porter','preston','prince','quentin','quincy','quinn','quintin','quinton','rafael','raleigh','ralph','ramiro','ramon','randal','randall','randell','randolph','randy','raphael','rashad','raul','ray','rayford','raymon','raymond','raymundo','reed','refugio','reggie','reginald','reid','reinaldo','renaldo','renato','rene','reuben','rex','rey','reyes','reynaldo','rhett','ricardo','rich','richard','richie','rick','rickey','rickie','ricky','rico','rigoberto','riley','rob','robbie','robby','robert','roberto','robin','robt','rocco','rocky','rod','roderick','rodger','rodney','rodolfo','rodrick','rodrigo','rogelio','roger','roland','rolando','rolf','rolland','roman','romeo','ron','ronald','ronnie','ronny','roosevelt','rory','rosario','roscoe','rosendo','ross','roy','royal','royce','ruben','rubin','rudolf','rudolph','rudy','rueben','rufus','rupert','russ','russel','russell','rusty','ryan','sal','salvador','salvatore','sam','sammie','sammy','samual','samuel','sandy','sanford','sang','santiago','santo','santos','saul','sawyer','scot','scott','scottie','scotty','sean','sebastian','sergio','seth','seymour','shad','shane','shannon','shaun','shawn','shayne','shelby','sheldon','shelton','sherman','sherwood','shirley','shon','sid','sidney','silas','simon','sol','solomon','son','sonny','spencer','stacey','stacy','stan','stanford','stanley','stanton','stefan','stephan','stephen','sterling','steve','steven','stevie','stewart','stuart','sung','sydney','sylvester','tad','tanner','taylor','ted','teddy','teodoro','terence','terrance','terrell','terrence','terry','thad','thaddeus','thanh','theo','theodore','theron','thomas','thurman','tim','timmy','timothy','titus','tobias','toby','tod','todd','tom','tomas','tommie','tommy','toney','tony','tory','tracey','tracy','travis','trent','trenton','trevor','trey','trinidad','tristan','troy','truman','tuan','ty','tyler','tyree','tyrell','tyron','tyrone','tyson','ulysses','val','valentin','valentine','van','vance','vaughn','vern','vernon','vicente','victor','vince','vincent','vincenzo','virgil','virgilio','vito','von','wade','waldo','walker','wallace','wally','walter','walton','ward','warner','warren','waylon','wayne','weldon','wendell','werner','wes','wesley','weston','whitney','wilber','wilbert','wilbur','wilburn','wiley','wilford','wilfred','wilfredo','will','willard','william','williams','willian','willie','willis','willy','wilmer','wilson','wilton','winford','winfred','winston','wm','woodrow','wyatt','xavier','yong','young','zachariah','zachary','zachery','zack','zackary','zane'];

var femaleNames1 = ['aaliyah','abbey','abbie','abby','abigail','ada','adah','adaline','adam','addie','addison','adela','adelaida','adelaide','adele','adelia','adelina','adeline','adell','adella','adelle','adena','adina','adria','adrian','adriana','adriane','adrianna','adrianne','adrien','adriene','adrienne','afton','agatha','agnes','agnus','agripina','agueda','agustina','ai','aida','aide','aiko','aileen','ailene','aimee','aisha','aja','akiko','akilah','alaina','alaine','alana','alane','alanna','alayna','alba','alberta','albertha','albertina','albertine','albina','alda','alease','alecia','aleen','aleida','aleisha','alejandra','alejandrina','alena','alene','alesha','aleshia','alesia','alessandra','aleta','aletha','alethea','alethia','alex','alexa','alexandra','alexandria','alexia','alexis','alfreda','alfredia','ali','alia','alica','alice','alicia','alida','alina','aline','alisa','alise','alisha','alishia','alisia','alison','alissa','alita','alix','aliza','alla','alleen','allegra','allen','allena','allene','allie','alline','allison','allyn','allyson','alma','almeda','almeta','alona','alpha','alta','altagracia','altha','althea','alva','alvera','alverta','alvina','alyce','alycia','alysa','alyse','alysha','alysia','alyson','alyssa','amada','amal','amalia','amanda','amber','amberly','amee','amelia','america','ami','amie','amiee','amina','amira','ammie','amparo','amy','an','ana','anabel','analisa','anamaria','anastacia','anastasia','andera','andra','andre','andrea','andree','andrew','andria','anette','angel','angela','angele','angelena','angeles','angelia','angelic','angelica','angelika','angelina','angeline','angelique','angelita','angella','angelyn','angie','angila','angla','angle','anglea','anh','anika','anisa','anisha','anissa','anita','anitra','anja','anjanette','anjelica','ann','anna','annabel','annabell','annabelle','annalee','annalisa','annamae','annamaria','annamarie','anne','anneliese','annelle','annemarie','annett','annetta','annette','annice','annie','annika','annis','annita','annmarie','anthony','antionette','antoinette','antonetta','antonette','antonia','antonietta','antonina','anya','apolonia','april','apryl','ara','araceli','aracelis','aracely','arcelia','ardath','ardelia','ardell','ardella','ardelle','ardis','ardith','aretha','argelia','argentina','aria','ariana','ariane','arianna','arianne','arica','arie','ariel','arielle','arla','arlean','arleen','arlena','arlene','arletha','arletta','arlette','arlinda','arline','arlyne','armanda','armandina','armida','arminda','arnetta','arnette','arnita','arthur','artie','arvilla','asha','ashanti','ashely','ashlea','ashlee','ashleigh','ashley','ashli','ashlie','ashly','ashlyn','ashton','asia','asley','assunta','astrid','asuncion','athena','aubree','aubrey','audie','audra','audrea','audrey','audria','audrie','audry','augusta','augustina','augustine','aundrea','aura','aurea','aurelia','aurora','aurore','autumn','ava','avelina','avery','avis','avril','awilda','ayako','ayana','ayanna','ayesha','azalee','azucena','azzie','babara','babette','bailey','bambi','bao','barabara','barb','barbar','barbara','barbera','barbie','barbra','bari','barrie','basilia','bea','beata','beatrice','beatris','beatriz','beaulah','bebe','becki','beckie','becky','bee','belen','belia','belinda','belkis','bell','bella','belle','belva','benita','bennie','berenice','berna','bernadette','bernadine','bernarda','bernardina','bernardine','berneice','bernetta','bernice','bernie','berniece','bernita','berry','berta','bertha','bertie','beryl','bess','bessie','beth','bethanie','bethann','bethany','bethel','betsey','betsy','bette','bettie','bettina','betty','bettyann','bettye','beula','beulah','bev','beverlee','beverley','beverly','bianca','bibi','billi','billie','billy','billye','birdie','birgit','blair','blake','blanca','blanch','blanche','blondell','blossom','blythe','bobbi','bobbie','bobbye','bobette','bok','bong','bonita','bonnie','bonny','branda','brande','brandee','brandi','brandie','brandon','brandy','breana','breann','breanna','breanne','bree','brenda','brenna','brett','brian','briana','brianna','brianne','bridget','bridgett','bridgette','brigette','brigid','brigida','brigitte','brinda','britany','britney','britni','britt','britta','brittaney','brittani','brittanie','brittany','britteny','brittney','brittni','brittny','bronwyn','brook','brooke','brooklyn','bruna','brunilda','bryanna','brynn','buena','buffy','bula','bulah','bunny','burma','caitlin','caitlyn','calandra','calista','callie','camelia','camellia','cameron','cami','camie','camila','camilla','camille','cammie','cammy','candace','candance','candelaria','candi','candice','candida','candie','candis','candra','candy','candyce','caprice','cara','caren','carey','cari','caridad','carie','carin','carina','carisa','carissa','carita','carl','carla','carlee','carleen','carlena','carlene','carletta','carley','carli','carlie','carline','carlita','carlos','carlota','carlotta','carly','carlyn','carma','carman','carmel','carmela','carmelia','carmelina','carmelita','carmella','carmen','carmina','carmon','carol','carola','carolann','carole','carolee','carolin','carolina','caroline','caroll','carolyn','carolyne','carolynn','caron','caroyln','carri','carrie','carrol','carroll','carry','cary','caryl','carylon','caryn','casandra','casey','casie','casimira','cassandra','cassaundra','cassey','cassi','cassidy','cassie','cassondra','cassy','catalina','catarina','caterina','catharine','catherin','catherina','catherine','cathern','catheryn','cathey','cathi','cathie','cathleen','cathrine','cathryn','cathy','catina','catrice','catrina','cayla','cecelia','cecil','cecila','cecile','cecilia','cecille','cecily','celena','celesta','celeste','celestina','celestine','celia','celina','celinda','celine','celsa','ceola','chae','chan','chana','chanda','chandra','chanel','chanell','chanelle','chang','chantal','chantay','chante','chantel','chantell','chantelle','chara','charis','charise','charissa','charisse','charita','charity','charla','charleen','charlena','charlene','charles','charlesetta','charlette','charlie','charline','charlott','charlotte','charlsie','charlyn','charmain','charmaine','charolette','chasidy','chasity','chassidy','chastity','chau','chaya','chelsea','chelsey','chelsie','cher','chere','cheree','cherelle','cheri','cherie','cherilyn','cherise','cherish','cherly','cherlyn','cherri','cherrie','cherry','cherryl','chery','cheryl','cheryle','cheryll','cheyenne','chi','chia','chieko','chin','china','ching','chiquita','chloe','chong','chris','chrissy','christa','christal','christeen','christel','christen','christena','christene','christi','christia','christian','christiana','christiane','christie','christin','christina','christine','christinia','christopher','christy','chrystal','chu','chun','chung','ciara','cicely','ciera','cierra','cinda','cinderella','cindi','cindie','cindy','cinthia','cira','clair','claire','clara','clare','clarence','claretha','claretta','claribel','clarice','clarinda','clarine','claris','clarisa','clarissa','clarita','classie','claude','claudette','claudia','claudie','claudine','clelia','clemencia','clementina','clementine','clemmie','cleo','cleopatra','cleora','cleotilde','cleta','clora','clorinda','clotilde','clyde','codi','cody','colby','coleen','colene','coletta','colette','colleen','collen','collene','collette','concepcion','conception','concetta','concha','conchita','connie','constance','consuela','consuelo','contessa','cora','coral','coralee','coralie','corazon','cordelia','cordia','cordie','coreen','corene','coretta','corey','cori','corie','corina','corine','corinna','corinne','corliss','cornelia','corrie','corrin','corrina','corrine','corrinne','cortney','cory','courtney','creola','cris','criselda','crissy','crista','cristal','cristen','cristi','cristie','cristin','cristina','cristine','cristy','cruz','crysta','crystal','crystle','cuc','curtis','cyndi','cyndy','cynthia','cyrstal','cythia','dacia','dagmar','dagny','dahlia','daina','daine','daisey','daisy','dakota','dale','dalene','dalia','dalila','dallas','damaris','dan','dana','danae','danelle','danette','dani','dania','danica','daniel','daniela','daniele','daniell','daniella','danielle','danika','danille','danita','dann','danna','dannette','dannie','dannielle','danuta','danyel','danyell','danyelle','daphine','daphne','dara','darby','darcel','darcey','darci','darcie','darcy','daria','darla','darleen','darlena','darlene','darline','darnell','daryl','david','davida','davina','dawn','dawna','dawne','dayle','dayna','daysi','deadra','dean','deana','deandra','deandrea','deane','deann','deanna','deanne','deb','debbi','debbie','debbra','debby','debera','debi','debora','deborah','debra','debrah','debroah','dede','dedra','dee','deeann','deeanna','deedee','deedra','deena','deetta','deidra','deidre','deirdre','deja','delaine','delana','delcie','delena','delfina','delia','delicia','delila','delilah','delinda','delisa','dell','della','delma','delmy','delois','deloise','delora','deloras','delores','deloris','delorse','delpha','delphia','delphine','delsie','delta','demetra','demetria','demetrice','demetrius','dena','denae','deneen','denese','denice','denise','denisha','denisse','denita','denna','dennis','dennise','denny','denyse','deon','deonna','desirae','desire','desiree','despina','dessie','destiny','detra','devin','devon','devona','devora','devorah','dia','diamond','dian','diana','diane','diann','dianna','dianne','diedra','diedre','dierdre','digna','dimple','dina','dinah','dinorah','dion','dione','dionna','dionne','divina','dixie','dodie','dollie','dolly','dolores','doloris','domenica','dominga','dominica','dominique','dominque','domitila','domonique','dona','donald','donella','donetta','donette','dong','donita','donna','donnetta','donnette','donnie','donya','dora','dorathy','dorcas','doreatha','doreen','dorene','doretha','dorethea','doretta','dori','doria','dorian','dorie','dorinda','dorine','doris','dorla','dorotha','dorothea','dorothy','dorris','dortha','dorthea','dorthey','dorthy','dot','dottie','dotty','dovie','dreama','drema','drew','drucilla','drusilla','dulce','dulcie','dung','dusti','dusty','dwana','dyan','earlean','earleen','earlene','earlie','earline','earnestine','eartha','easter','eboni','ebonie','ebony','echo','eda','edda','eddie','edelmira','eden','edie','edith','edna','edra','edris','edward','edwina','edyth','edythe','effie','ehtel','eileen','eilene','ela','eladia','elaina','elaine','elana','elane','elanor','elayne','elba','elda','eldora','eleanor','eleanora','eleanore','elease','elena','elene','eleni','elenor','elenora','elenore','eleonor','eleonora','eleonore','elfreda','elfrieda','elfriede','elia','eliana','elicia','elida','elidia','elin','elina','elinor','elinore','elisa','elisabeth','elise','elisha','elissa','eliz','eliza','elizabet','elizabeth','elizbeth','elizebeth','elke','ella','ellamae','ellan','ellen','ellena','elli','ellie','ellis','elly','ellyn','elma','elmer','elmira','elna','elnora','elodia','elois','eloisa','eloise','elouise','elsa','else','elsie','elsy','elva','elvera','elvia','elvie','elvina','elvira','elwanda','elyse','elza','ema','emelda','emelia','emelina','emeline','emely','emerald','emerita','emiko','emilee','emilia','emilie','emily','emma','emmaline','emmie','emmy','emogene','ena','enda','enedina','eneida','enid','enola','enriqueta','epifania','era','eric','erica','ericka','erika','erin','erinn','erlene','erlinda','erline','erma','ermelinda','erminia','erna','ernestina','ernestine','eryn','esmeralda','esperanza','essie','esta','estefana','estela','estell','estella','estelle','ester','esther','estrella','etha','ethel','ethelene','ethelyn','ethyl','etsuko','etta','ettie','eufemia','eugena','eugene','eugenia','eugenie','eula','eulah','eulalia','eun','euna','eunice','eura','eusebia','eustolia','eva','evalyn','evan','evangelina','evangeline','eve','evelia','evelin','evelina','eveline','evelyn','evelyne','evelynn','evette','evia','evie','evita','evon','evonne','ewa','exie','fabiola','fae','fairy','faith','fallon','fannie','fanny','farah'];

var femaleNames2=['farrah','fatima','fatimah','faustina','faviola','fawn','fay','faye','fe','felecia','felica','felice','felicia','felicidad','felicita','felicitas','felipa','felisa','felisha','fermina','fern','fernanda','fernande','ferne','fidela','fidelia','filomena','fiona','flavia','fleta','flo','flor','flora','florance','florence','florencia','florene','florentina','floretta','floria','florida','florinda','florine','florrie','flossie','floy','fonda','fran','france','francene','frances','francesca','franchesca','francie','francina','francine','francis','francisca','francisco','francoise','frank','frankie','fransisca','fred','freda','fredda','freddie','frederica','fredericka','fredia','fredricka','freeda','freida','frida','frieda','fumiko','gabriel','gabriela','gabriele','gabriella','gabrielle','gail','gala','gale','galina','garnet','garnett','gary','gay','gaye','gayla','gayle','gaylene','gaynell','gaynelle','gearldine','gema','gemma','gena','gene','genesis','geneva','genevie','genevieve','genevive','genia','genie','genna','gennie','genny','genoveva','georgann','george','georgeann','georgeanna','georgene','georgetta','georgette','georgia','georgiana','georgiann','georgianna','georgianne','georgie','georgina','georgine','gerald','geraldine','geralyn','gerda','geri','germaine','gerri','gerry','gertha','gertie','gertrud','gertrude','gertrudis','gertude','ghislaine','gia','gianna','gidget','gigi','gilberte','gilda','gillian','gilma','gina','ginette','ginger','ginny','giovanna','gisela','gisele','giselle','gita','giuseppina','gladis','glady','gladys','glayds','glenda','glendora','glenn','glenna','glennie','glennis','glinda','gloria','glory','glynda','glynis','golda','golden','goldie','grace','gracia','gracie','graciela','grayce','grazyna','gregoria','gregory','greta','gretchen','gretta','gricelda','grisel','griselda','guadalupe','gudrun','guillermina','gussie','gwen','gwenda','gwendolyn','gwenn','gwyn','gwyneth','ha','hae','hailey','haley','halina','halley','hallie','han','hana','hang','hanh','hanna','hannah','hannelore','harmony','harold','harper','harriet','harriett','harriette','hassie','hattie','haydee','hayley','hazel','heather','hedwig','hedy','hee','heide','heidi','heidy','heike','helaine','helen','helena','helene','helga','hellen','henrietta','henriette','henry','herlinda','herma','hermelinda','hermila','hermina','hermine','herminia','herta','hertha','hester','hettie','hiedi','hien','hilaria','hilary','hilda','hilde','hildegard','hildegarde','hildred','hillary','hilma','hiroko','hisako','hoa','holley','holli','hollie','hollis','holly','honey','hong','hope','hortencia','hortense','hortensia','hsiu','hue','hui','hulda','huong','hwa','hyacinth','hye','hyo','hyon','hyun','ida','idalia','idell','idella','iesha','ignacia','ila','ilana','ilda','ileana','ileen','ilene','iliana','illa','ilona','ilse','iluminada','ima','imelda','imogene','in','ina','india','indira','inell','ines','inez','inga','inge','ingeborg','inger','ingrid','inocencia','iola','iona','ione','ira','iraida','irena','irene','irina','iris','irish','irma','irmgard','isa','isabel','isabell','isabella','isabelle','isadora','isaura','isela','isidra','isis','isobel','iva','ivana','ivelisse','ivette','ivey','ivonne','ivory','ivy','izetta','izola','ja','jacalyn','jacelyn','jacinda','jacinta','jack','jackeline','jackelyn','jacki','jackie','jacklyn','jackqueline','jaclyn','jacqualine','jacque','jacquelin','jacqueline','jacquelyn','jacquelyne','jacquelynn','jacquetta','jacqui','jacquie','jacquiline','jacquline','jacqulyn','jada','jade','jadwiga','jae','jaime','jaimee','jaimie','jaleesa','jalisa','jama','jame','jamee','james','jamey','jami','jamie','jamika','jamila','jammie','jan','jana','janae','janay','jane','janean','janee','janeen','janel','janell','janella','janelle','janene','janessa','janet','janeth','janett','janetta','janette','janey','jani','janice','janie','janiece','janina','janine','janis','janise','janita','jann','janna','jannet','jannette','jannie','january','janyce','jaqueline','jaquelyn','jasmin','jasmine','jason','jaunita','jay','jaye','jayme','jaymie','jayna','jayne','jazmin','jazmine','jean','jeana','jeane','jeanelle','jeanene','jeanett','jeanetta','jeanette','jeanice','jeanie','jeanine','jeanmarie','jeanna','jeanne','jeannetta','jeannette','jeannie','jeannine','jeffie','jeffrey','jen','jena','jenae','jene','jenee','jenell','jenelle','jenette','jeneva','jeni','jenice','jenifer','jeniffer','jenine','jenise','jenna','jennefer','jennell','jennette','jenni','jennie','jennifer','jenniffer','jennine','jenny','jeraldine','jeremy','jeri','jerica','jerilyn','jerlene','jerri','jerrica','jerrie','jerry','jesenia','jesica','jesse','jessenia','jessi','jessia','jessica','jessie','jessika','jestine','jesus','jesusa','jesusita','jetta','jettie','jewel','jewell','ji','jill','jillian','jimmie','jimmy','jin','jina','jinny','jo','joan','joana','joane','joanie','joann','joanna','joanne','joannie','joaquina','jocelyn','jodee','jodi','jodie','jody','joe','joeann','joel','joella','joelle','joellen','joetta','joette','joey','johana','johanna','johanne','john','johna','johnetta','johnette','johnie','johnna','johnnie','johnny','johnsie','joi','joie','jolanda','joleen','jolene','jolie','joline','jolyn','jolynn','jon','jona','jone','jonell','jonelle','jong','joni','jonie','jonna','jonnie','jordan','jose','josefa','josefina','josefine','joselyn','joseph','josephina','josephine','josette','joshua','josie','joslyn','josphine','jovan','jovita','joy','joya','joyce','joycelyn','joye','juan','juana','juanita','jude','judi','judie','judith','judy','jule','julee','julene','juli','julia','julian','juliana','juliane','juliann','julianna','julianne','julie','julieann','julienne','juliet','julieta','julietta','juliette','julio','julissa','june','jung','junie','junita','junko','justa','justin','justina','justine','jutta','ka','kacey','kaci','kacie','kacy','kai','kaila','kaitlin','kaitlyn','kala','kaleigh','kaley','kali','kallie','kalyn','kam','kamala','kami','kamilah','kandace','kandi','kandice','kandis','kandra','kandy','kanesha','kanisha','kara','karan','kareen','karen','karena','karey','kari','karie','karima','karin','karina','karine','karisa','karissa','karl','karla','karleen','karlene','karly','karlyn','karma','karmen','karol','karole','karoline','karolyn','karon','karren','karri','karrie','karry','kary','karyl','karyn','kasandra','kasey','kasha','kasi','kasie','kassandra','kassie','kate','katelin','katelyn','katelynn','katerine','kathaleen','katharina','katharine','katharyn','kathe','katheleen','katherin','katherina','katherine','kathern','katheryn','kathey','kathi','kathie','kathleen','kathlene','kathline','kathlyn','kathrin','kathrine','kathryn','kathryne','kathy','kathyrn','kati','katia','katie','katina','katlyn','katrice','katrina','kattie','katy','kay','kayce','kaycee','kaye','kayla','kaylee','kayleen','kayleigh','kaylene','kazuko','kecia','keeley','keely','keena','keesha','keiko','keila','keira','keisha','keith','keitha','keli','kelle','kellee','kelley','kelli','kellie','kelly','kellye','kelsey','kelsi','kelsie','kemberly','kena','kenda','kendal','kendall','kendra','kenia','kenisha','kenna','kennedy','kenneth','kenya','kenyatta','kenyetta','kera','keren','keri','kerri','kerrie','kerry','kerstin','kesha','keshia','keturah','keva','kevin','khadijah','khalilah','kia','kiana','kiara','kiera','kiersten','kiesha','kiley','kim','kimber','kimberely','kimberlee','kimberley','kimberli','kimberlie','kimberly','kimbery','kimbra','kimi','kimiko','kina','kindra','kinsley','kira','kirby','kirsten','kirstie','kirstin','kisha','kit','kittie','kitty','kiyoko','kizzie','kizzy','klara','kori','kortney','kourtney','kris','krishna','krissy','krista','kristal','kristan','kristeen','kristel','kristen','kristi','kristian','kristie','kristin','kristina','kristine','kristle','kristy','kristyn','krysta','krystal','krysten','krystin','krystina','krystle','krystyna','kum','kyla','kyle','kylee','kylie','kym','kymberly','kyoko','kyong','kyra','kyung'];

var femaleNames3 =['lacey','lachelle','laci','lacie','lacresha','lacy','ladawn','ladonna','lady','lael','lahoma','lai','laila','laine','lajuana','lakeesha','lakeisha','lakendra','lakenya','lakesha','lakeshia','lakia','lakiesha','lakisha','lakita','lala','lamonica','lan','lana','lane','lanell','lanelle','lanette','lang','lani','lanie','lanita','lannie','lanora','laquanda','laquita','lara','larae','laraine','laree','larhonda','larisa','larissa','larita','laronda','larraine','larry','larue','lasandra','lashanda','lashandra','lashaun','lashaunda','lashawn','lashawna','lashawnda','lashay','lashell','lashon','lashonda','lashunda','lasonya','latanya','latarsha','latasha','latashia','latesha','latia','laticia','latina','latisha','latonia','latonya','latoria','latosha','latoya','latoyia','latrice','latricia','latrina','latrisha','launa','laura','lauralee','lauran','laure','laureen','laurel','lauren','laurena','laurence','laurene','lauretta','laurette','lauri','laurice','laurie','laurinda','laurine','lauryn','lavada','lavelle','lavenia','lavera','lavern','laverna','laverne','laveta','lavette','lavina','lavinia','lavon','lavona','lavonda','lavone','lavonia','lavonna','lavonne','lawana','lawanda','lawanna','lawrence','layla','layne','le','lea','leah','lean','leana','leandra','leann','leanna','leanne','leanora','leatha','leatrice','lecia','leda','lee','leeann','leeanna','leeanne','leena','leesa','leia','leida','leigh','leigha','leighann','leila','leilani','leisa','leisha','lekisha','lela','lelah','lelia','lena','lenita','lenna','lennie','lenora','lenore','leo','leola','leoma','leon','leona','leonarda','leone','leonia','leonida','leonie','leonila','leonor','leonora','leonore','leontine','leora','leota','lera','lesa','lesha','lesia','leslee','lesley','lesli','leslie','lessie','lester','leta','letha','leticia','letisha','letitia','lettie','letty','lewis','lexie','lezlie','li','lia','liana','liane','lianne','libbie','libby','liberty','librada','lida','lidia','lien','lieselotte','ligia','lila','lili','lilia','lilian','liliana','lilla','lilli','lillia','lilliam','lillian','lilliana','lillie','lilly','lily','lin','lina','linda','lindsay','lindsey','lindsy','lindy','linette','ling','linh','linn','linnea','linnie','linsey','lisa','lisabeth','lisandra','lisbeth','lise','lisette','lisha','lissa','lissette','lita','livia','liz','liza','lizabeth','lizbeth','lizeth','lizette','lizzette','lizzie','loan','logan','loida','lois','loise','lola','lolita','loma','lona','londa','loni','lonna','lonnie','lora','loraine','loralee','lore','lorean','loree','loreen','lorelei','loren','lorena','lorene','lorenza','loreta','loretta','lorette','lori','loria','loriann','lorie','lorilee','lorina','lorinda','lorine','loris','lorita','lorna','lorraine','lorretta','lorri','lorriane','lorrie','lorrine','lory','lottie','lou','louann','louanne','louella','louetta','louie','louis','louisa','louise','loura','lourdes','lourie','louvenia','love','lovella','lovetta','lovie','loyce','lu','luana','luann','luanna','luanne','luba','luci','lucia','luciana','lucie','lucienne','lucila','lucile','lucilla','lucille','lucina','lucinda','lucrecia','lucretia','lucy','ludie','ludivina','lue','luella','luetta','luis','luisa','luise','lula','lulu','luna','lupe','lupita','lura','lurlene','lurline','luvenia','luz','lyda','lydia','lyla','lyn','lynda','lyndia','lyndsay','lyndsey','lynell','lynelle','lynetta','lynette','lynn','lynna','lynne','lynnette','lynsey','ma','mabel','mabelle','mable','machelle','macie','mackenzie','macy','madalene','madaline','madalyn','maddie','madelaine','madeleine','madelene','madeline','madelyn','madge','madie','madison','madlyn','madonna','mae','maegan','mafalda','magali','magaly','magan','magaret','magda','magdalen','magdalena','magdalene','magen','maggie','magnolia','mahalia','mai','maia','maida','maile','maira','maire','maisha','maisie','majorie','makeda','malena','malia','malika','malinda','malisa','malissa','malka','mallie','mallory','malorie','malvina','mamie','mammie','man','mana','manda','mandi','mandie','mandy','manie','manuela','many','mao','maple','mara','maragaret','maragret','maranda','marcela','marcelene','marcelina','marceline','marcell','marcella','marcelle','marcene','marchelle','marci','marcia','marcie','marcy','mardell','maren','marg','margaret','margareta','margarete','margarett','margaretta','margarette','margarita','margarite','margart','marge','margene','margeret','margert','margery','marget','margherita','margie','margit','margo','margorie','margot','margret','margrett','marguerita','marguerite','margurite','margy','marhta','mari','maria','mariah','mariam','marian','mariana','marianela','mariann','marianna','marianne','maribel','maribeth','marica','maricela','maricruz','marie','mariel','mariela','mariella','marielle','marietta','mariette','mariko','marilee','marilou','marilu','marilyn','marilynn','marin','marina','marinda','marine','mario','marion','maris','marisa','marisela','marisha','marisol','marissa','marita','maritza','marivel','marjorie','marjory','mark','marketta','markita','marla','marlana','marleen','marlen','marlena','marlene','marlin','marline','marlo','marlyn','marlys','marna','marni','marnie','marquerite','marquetta','marquita','marquitta','marry','marsha','marshall','marta','marth','martha','marti','martin','martina','martine','marty','marva','marvel','marvella','marvis','marx','mary','marya','maryalice','maryam','maryann','maryanna','maryanne','marybelle','marybeth','maryellen','maryetta','maryjane','maryjo','maryland','marylee','marylin','maryln','marylou','marylouise','marylyn','marylynn','maryrose','masako','matha','mathilda','mathilde','matilda','matilde','matthew','mattie','maud','maude','maudie','maura','maureen','maurice','maurine','maurita','mavis','maxie','maxima','maximina','maxine','may','maya','maybell','maybelle','maye','mayme','mayola','mayra','mazie','mckenzie','meagan','meaghan','mechelle','meda','mee','meg','megan','meggan','meghan','meghann','mei','melaine','melani','melania','melanie','melany','melba','melda','melia','melida','melina','melinda','melisa','melissa','melissia','melita','mellie','mellisa','mellissa','melodee','melodi','melodie','melody','melonie','melony','melva','melvin','melvina','melynda','mendy','mercedes','mercedez','mercy','meredith','meri','merideth','meridith','merilyn','merissa','merle','merlene','merlyn','merna','merri','merrie','merrilee','merrill','merry','mertie','meryl','meta','mi','mia','mica','micaela','micah','micha','michael','michaela','michaele','michal','micheal','michel','michele','michelina','micheline','michell','michelle','michiko','mickey','micki','mickie','miesha','migdalia','mignon','miguelina','mika','mikaela','mike','miki','mikki','mila','milagro','milagros','milda','mildred','milissa','millicent','millie','milly','mimi','min','mina','minda','mindi','mindy','minerva','ming','minh','minna','minnie','minta','mira','miranda','mireille','mirella','mireya','miriam','mirian','mirna','mirta','mirtha','misha','miss','missy','misti','mistie','misty','mitchell','mitsue','mitsuko','mittie','mitzi','mitzie','miyoko','modesta','moira','mollie','molly','mona','monet','monica','monika','monique','monnie','monserrate','moon','mora','morgan','moriah','mozell','mozella','mozelle','mui','muoi','muriel','my','myesha','myong','myra','myriam','myrl','myrle','myrna','myrta','myrtice','myrtie','myrtis','myrtle','myung'];

var femaleNames4 =['na','nada','nadene','nadia','nadine','naida','nakesha','nakia','nakisha','nakita','nam','nan','nana','nancee','nancey','nanci','nancie','nancy','nanette','nannette','nannie','naoma','naomi','narcisa','natacha','natalia','natalie','natalya','natasha','natashia','nathalie','natisha','natividad','natosha','necole','neda','nedra','neely','neida','nelda','nelia','nelida','nell','nella','nelle','nellie','nelly','nena','nenita','neoma','neomi','nereida','nerissa','nery','neta','nettie','neva','nevada','nevaeh','nga','ngan','ngoc','nguyet','nia','nichelle','nichol','nichole','nicholle','nicki','nickie','nickole','nicky','nicol','nicola','nicolasa','nicole','nicolette','nicolle','nida','nidia','niesha','nieves','niki','nikia','nikita','nikki','nikole','nila','nilda','nilsa','nina','ninfa','nisha','nita','nobuko','noel','noelia','noella','noelle','noemi','nohemi','nola','noma','nona','nora','norah','noreen','norene','noriko','norine','norma','norman','nova','novella','nu','nubia','numbers','nydia','nyla','obdulia','ocie','octavia','oda','odelia','odell','odessa','odette','odilia','ofelia','ok','ola','olene','oleta','olevia','olga','olimpia','olinda','oliva','olive','olivia','ollie','olympia','oma','omega','ona','oneida','onie','onita','opal','ophelia','ora','oralee','oralia','oretha','orpha','oscar','ossie','otelia','otha','otilia','ouida','ozell','ozella','ozie','pa','page','paige','paisley','palma','palmira','pam','pamala','pamela','pamelia','pamella','pamila','pamula','pandora','pansy','paola','paris','parthenia','particia','pasty','pat','patience','patria','patrica','patrice','patricia','patrick','patrina','patsy','patti','pattie','patty','paul','paula','paulene','pauletta','paulette','paulina','pauline','paulita','paz','pearl','pearle','pearlene','pearlie','pearline','pearly','peg','peggie','peggy','pei','penelope','penney','penni','pennie','penny','perla','perry','peter','petra','petrina','petronila','peyton','phebe','phillis','philomena','phoebe','phung','phuong','phylicia','phylis','phyliss','phyllis','pia','piedad','pilar','ping','pinkie','piper','pok','polly','porsche','porsha','portia','precious','pricilla','princess','priscila','priscilla','providencia','prudence','pura','qiana','queen','queenie','quiana','quinn','quyen','rachael','rachal','racheal','rachel','rachele','rachell','rachelle','racquel','rae','raeann','raelene','rafaela','raguel','raina','raisa','ramona','ramonita','rana','ranae','randa','randee','randi','randy','ranee','raquel','rasheeda','rashida','raven','ray','raye','raylene','raymond','raymonde','rayna','rea','reagan','reanna','reatha','reba','rebbeca','rebbecca','rebeca','rebecca','rebecka','rebekah','reda','reena','refugia','refugio','regan','regena','regenia','regina','regine','reginia','reiko','reina','reita','rema','remedios','remona','rena','renae','renata','renate','renay','renda','rene','renea','renee','renetta','renita','renna','ressie','reta','retha','retta','reva','reyna','reynalda','rhea','rheba','rhiannon','rhoda','rhona','rhonda','ria','ricarda','richard','richelle','ricki','rickie','rikki','riley','rima','rina','risa','rita','riva','rivka','robbi','robbie','robbin','robbyn','robena','robert','roberta','roberto','robin','robyn','rochel','rochell','rochelle','rocio','rolanda','rolande','roma','romaine','romana','romelia','romona','rona','ronald','ronda','roni','ronna','ronni','ronnie','rory','rosa','rosalba','rosalee','rosalia','rosalie','rosalina','rosalind','rosalinda','rosaline','rosalva','rosalyn','rosamaria','rosamond','rosana','rosann','rosanna','rosanne','rosaria','rosario','rosaura','rose','roseann','roseanna','roseanne','roselee','roselia','roseline','rosella','roselle','roselyn','rosemarie','rosemary','rosena','rosenda','rosetta','rosette','rosia','rosie','rosina','rosio','rosita','roslyn','rossana','rossie','rosy','rowena','roxana','roxane','roxann','roxanna','roxanne','roxie','roxy','roy','royce','rozanne','rozella','rubi','rubie','ruby','rubye','rudy','rufina','russell','ruth','rutha','ruthann','ruthanne','ruthe','ruthie','ryan','ryann','sabina','sabine','sabra','sabrina','sacha','sachiko','sade','sadie','sadye','sage','salena','salina','salley','sallie','sally','salome','sam','samantha','samara','samatha','samella','samira','sammie','sammy','samuel','sana','sanda','sandee','sandi','sandie','sandra','sandy','sang','sanjuana','sanjuanita','sanora','santa','santana','santina','santos','sara','sarah','sarai','saran','sari','sarina','sarita','sasha','saturnina','sau','saundra','savanna','savannah','scarlet','scarlett','scott','scottie','sean','season','sebrina','see','seema','selena','selene','selina','selma','sena','senaida','september','serafina','serena','serenity','serina','serita','setsuko','sha','shae','shaina','shakia','shakira','shakita','shala','shalanda','shalon','shalonda','shameka','shamika','shan','shana','shanae','shanda','shandi','shandra','shane','shaneka','shanel','shanell','shanelle','shani','shanice','shanika','shaniqua','shanita','shanna','shannan','shannon','shanon','shanta','shantae','shantay','shante','shantel','shantell','shantelle','shanti','shaquana','shaquita','shara','sharan','sharda','sharee','sharell','sharen','shari','sharice','sharie','sharika','sharilyn','sharita','sharla','sharleen','sharlene','sharmaine','sharolyn','sharon','sharonda','sharri','sharron','sharyl','sharyn','shasta','shaun','shauna','shaunda','shaunna','shaunta','shaunte','shavon','shavonda','shavonne','shawana','shawanda','shawanna','shawn','shawna','shawnda','shawnee','shawnna','shawnta','shay','shayla','shayna','shayne','shea','sheba','sheena','sheila','sheilah','shela','shelba','shelby','shelia','shella','shelley','shelli','shellie','shelly','shemeka','shemika','shena','shenika','shenita','shenna','shera','sheree','sherell','sheri','sherice','sheridan','sherie','sherika','sherill','sherilyn','sherise','sherita','sherlene','sherley','sherly','sherlyn','sheron','sherrell','sherri','sherrie','sherril','sherrill','sherron','sherry','sherryl','shery','sheryl','sheryll','shiela','shila','shiloh','shin','shira','shirely','shirl','shirlee','shirleen','shirlene','shirley','shirly','shizue','shizuko','shona','shonda','shondra','shonna','shonta','shoshana','shu','shyla','sibyl','sidney','sierra','signe','sigrid','silva','silvana','silvia','sima','simona','simone','simonne','sina','sindy','siobhan','sirena','siu','sixta','skye','skylar','slyvia','so','socorro','sofia','soila','sol','solange','soledad','somer','sommer','son','sona','sondra','song','sonia','sonja','sonya','soo','sook','soon','sophia','sophie','soraya','sparkle','spring','stacee','stacey','staci','stacia','stacie','stacy','star','starla','starr','stasia','stefani','stefania','stefanie','stefany','steffanie','stella','stepanie','stephaine','stephane','stephani','stephania','stephanie','stephany','stephen','stephenie','stephine','stephnie','steven','stevie','stormy','su','suanne','sudie','sue','sueann','suellen','suk','sulema','sumiko','summer','sun','sunday','sung','sunni','sunny','sunshine','susan','susana','susann','susanna','susannah','susanne','susie','susy','suzan','suzann','suzanna','suzanne','suzette','suzi','suzie','suzy','svetlana','sybil','syble','sydney','sylvia','sylvie','synthia','syreeta','ta','tabatha','tabetha','tabitha','tai','taina','taisha','tajuana','takako','takisha','talia','talisha','talitha','tam','tama','tamala','tamar','tamara','tamatha','tambra','tameika','tameka','tamekia','tamela','tamera','tamesha','tami','tamica','tamie','tamika','tamiko','tamisha','tammara','tammera','tammi','tammie','tammy','tamra','tana','tandra','tandy','taneka','tanesha','tangela','tania','tanika','tanisha','tanja','tanna','tanya','tara','tarah','taren','tari','tarra','tarsha','taryn','tasha','tashia','tashina','tasia','tatiana','tatum','tatyana','taunya','tawana','tawanda','tawanna','tawna','tawny','tawnya','taylor','tayna','teena','tegan','teisha','telma','temeka','temika','tempie','temple','tena','tenesha','tenisha','tennie','tennille','teodora','teofila','tequila','tera','tereasa','teresa','terese','teresia','teresita','teressa','teri','terica','terina','terisa','terra','terrell','terresa','terri','terrie','terrilyn','terry','tesha','tess','tessa','tessie','thalia','thanh','thao','thea','theda','thelma','theo','theodora','theola','theresa','therese','theresia','theressa','thersa','thi','thomas','thomasena','thomasina','thomasine','thora','thresa','thu','thuy','tia','tiana','tianna','tiara','tien','tiera','tierra','tiesha','tifany','tiffaney','tiffani','tiffanie','tiffany','tiffiny','tijuana','tilda','tillie','timika','timothy','tina','tinisha','tiny','tisa','tish','tisha','tobi','tobie','toby','toccara','toi','tomasa','tomeka','tomi','tomika','tomiko','tommie','tommy','tommye','tomoko','tona','tonda','tonette','toni','tonia','tonie','tonisha','tonita','tonja','tony','tonya','tora','tori','torie','torri','torrie','tory','tosha','toshia','toshiko','tova','towanda','toya','tracee','tracey','traci','tracie','tracy','tran','trang','travis','treasa','treena','trena','tresa','tressa','tressie','treva','tricia','trina','trinh','trinidad','trinity','trish','trisha','trista','tristan','troy','trudi','trudie','trudy','trula','tu','tula','tuyet','twana','twanda','twanna','twila','twyla','tyesha','tyisha','tyler','tynisha','tyra','ula','ulrike','un','una','ursula','usha','ute','vada','val','valarie','valda','valencia','valene','valentina','valentine','valeri','valeria','valerie','valery','vallie','valorie','valrie','van','vanda','vanesa','vanessa','vanetta','vania','vanita','vanna','vannesa','vannessa','vashti','vasiliki','veda','velda','velia','vella','velma','velva','velvet','vena','venessa','venetta','venice','venita','vennie','venus','veola','vera','verda','verdell','verdie','verena','vergie','verla','verlene','verlie','verline','verna','vernell','vernetta','vernia','vernice','vernie','vernita','vernon','verona','veronica','veronika','veronique','versie','vertie','vesta','veta','vi','vicenta','vickey','vicki','vickie','vicky','victor','victoria','victorina','vida','viki','vikki','vilma','vina','vincenza','vinita','vinnie','viola','violet','violeta','violette','virgen','virgie','virgil','virgina','virginia','vita','viva','vivan','vivian','viviana','vivien','vivienne','voncile','vonda','vonnie','wai','walter','waltraud','wan','wanda','waneta','wanetta','wanita','wava','wei','wen','wendi','wendie','wendolyn','wendy','wenona','wesley','whitley','whitney','wilda','wilhelmina','wilhemina','willa','willena','willene','willetta','willette','willia','william','willie','williemae','willodean','willow','wilma','windy','winifred','winnie','winnifred','winona','winter','wonda','wynell','wynona','xenia','xiao','xiomara','xochitl','xuan','yadira','yaeko','yael','yahaira','yajaira','yan','yang','yanira','yasmin','yasmine','yasuko','yee','yelena','yen','yer','yesenia','yessenia','yetta','yevette','yi','ying','yoko','yolanda','yolande','yolando','yolonda','yon','yong','yoshie','yoshiko','youlanda','young','yu','yuette','yuk','yuki','yukiko','yuko','yulanda','yun','yung','yuonne','yuri','yuriko','yvette','yvone','yvonne','zada','zaida','zana','zandra','zelda','zella','zelma','zena','zenaida','zenia','zenobia','zetta','zina','zita','zoe','zoey','zofia','zoila','zola','zona','zonia','zora','zoraida','zula','zulema','zulma'];

var positiveWords = ['absolutely','adorable','accepted','acclaimed','accomplish','accomplishment','achievement','action','active','admire','adventure','affirmative','affluent','agree','agreeable','amazing','angelic','appealing','approve','aptitude','attractive','awesome','beaming','beautiful','believe','beneficial','bliss','bountiful','bounty','brave','bravo','brilliant','bubbly','calm','celebrated','certain','champ','champion','charming','cheery','choice','classic','classical','clean','commend','composed','congratulation','constant','cool','courageous','creative','cute','dazzling','delight','delightful','distinguished','divine','earnest','easy','ecstatic','effective','effervescent','efficient','effortless','electrifying','elegant','enchanting','encouraging','endorsed','energetic','energized','engaging','enthusiastic','essential','esteemed','ethical','excellent','exciting','exquisite','fabulous','fair','familiar','famous','fantastic','favorable','fetching','fine','fitting','flourishing','fortunate','free','fresh','friendly','fun','funny','generous','genius','genuine','giving','glamorous','glowing','good','gorgeous','graceful','great','green','grin','growing','handsome','happy','harmonious','healing','healthy','hearty','heavenly','honest','honorable','honored','hug','idea','ideal','imaginative','imagine','impressive','independent','innovate','innovative','instant','instantaneous','instinctive','intuitive','intellectual','intelligent','inventive','jovial','joy','jubilant','keen','kind','knowing','knowledgeable','laugh','legendary','light','learned','lively','lovely','lucid','lucky','luminous','marvelous','masterful','meaningful','merit','meritorious','miraculous','motivating','moving','natural','nice','novel','now','nurturing','nutritious','okay','one','one-hundredpercent','open','optimistic','paradise','perfect','phenomenal','pleasurable','plentiful','pleasant','poised','polished','popular','positive','powerful','prepared','pretty','principled','productive','progress','prominent','protected','proud','quality','quick','quiet','ready','reassuring','refined','refreshing','rejoice','reliable','remarkable','resounding','respected','restored','reward','rewarding','right','robust','safe','satisfactory','secure','seemly','simple','skilled','skillful','smile','soulful','sparkling','special','spirited','spiritual','stirring','stupendous','stunning','success','successful','sunny','super','superb','supporting','surprising','terrific','thorough','thrilling','thriving','tops','tranquil','transforming','transformative','trusting','truthful','unreal','unwavering','up','upbeat','upright','upstanding','valued','vibrant','victorious','victory','vigorous','virtuous','vital','vivacious','wealthy','welcome','well','whole','wholesome','willing','wonderful','wondrous','worthy','wow','yes','yummy','zeal','zealous',];

var negativeWords = ['abysmal','adverse','alarming','angry','annoy','anxious','apathy','appalling','atrocious','awful','bad','banal','barbed','belligerent','bemoan','beneath','boring','broken','callous',"can't",'clumsy','coarse','cold','cold-hearted','collapse','confused','contradictory','contrary','corrosive','corrupt','crazy','creepy','criminal','cruel','cry','cutting','dead','decaying','damage','damaging','dastardly','deplorable','depressed','deprived','deformed','deny','despicable','detrimental','dirty','disease','disgusting','disheveled','dishonest','dishonorable','dismal','distress',"don't",
 'dreadful','dreary','enraged','eroding','evil','fail','faulty','fear','feeble','fight','filthy','foul','frighten','frightful','gawky','ghastly','grave','greed','grim','grimace','gross','grotesque','gruesome','guilty','haggard','hard','hard-hearted','harmful','hate','hideous','homely','horrendous','horrible','hostile','hurt','hurtful','icky','ignore','ignorant','ill','immature','imperfect','impossible','inane','inelegant','infernal','injure','injurious','insane','insidious','insipid','jealous','junky','lose','lousy','lumpy','malicious','mean','menacing','messy','misshapen','missing','misunderstood','moan','moldy','monstrous','naive','nasty','naughty','negate','negative','never','no','nobody','nondescript','nonsense','not','noxious','objectionable','odious','offensive','old','oppressive','pain','perturb','pessimistic','petty','plain','poisonous','poor','prejudice','questionable','quirky','quit','reject','renege','repellant','reptilian','repulsive','repugnant','revenge','revolting','rocky','rotten','rude','ruthless','sad','savage','scare','scary','scream','severe','shoddy','shocking','sick','sickening','sinister','slimy','smelly','sobbing','sorry','spiteful','sticky','stinky','stormy','stressful','stuck','stupid','substandard','suspect','suspicious','tense','terrible','terrifying','threatening','ugly','undermine','unfair','unfavorable','unhappy','unhealthy','unjust','unlucky','unpleasant','upset','unsatisfactory','unsightly','untoward','unwanted','unwelcome','unwholesome','unwieldy','unwise','upset','vice','vicious','vile','villainous','vindictive','wary','weary','wicked','woeful','worthless','wound','yell','yucky','zero'];

var d = new Date();
var time1 = d.getTime();
console.log('Today: Date = ' + d);
var count = 0;
var countProcess = 0;

//console.log('date3 = ' + d);


var query= '';
//attach multiple word arguments
for (var i=3; i<nodeArgv.length; i++){
	  if(i>3 && i<nodeArgv.length){
	   query=query+ '+' + nodeArgv[i];
	  } else{
	   query=query+ nodeArgv[i];
	  }
}

runCommand();
//=====================================function run Command==========================================
function runCommand() { 
	//switch case
	switch(command){
	  case 'mytweets':
	    		myTweets();
	 			break;
	  
	  default:
	    console.log("Please enter one of the following  command:  ");
	    console.log("{my-tweets; spotify-this-song; movie-this; do-what-it-says}");
	  break;
	}
}//end of function runCommand

//=====================================function myTweets==========================================
function myTweets() {
    // Get twitterKeys from keys.js
var keys = require('./keys')
var client = new Twitter(keys.twitterKeys);
console.log( "=========================================================================");

var stream = client.stream('statuses/filter', {track: searchCreteria});

stream.on('data', function(event) { 
 var currDate = new Date(); 
		     	  currDate.setDate(currDate.getDate() - 7);	
		        var twitDate = new Date(event.created_at);
		        var date = new Date();

   		 			var tweetId = event.id;
						client.get('statuses/retweet/' + tweetId, function(error, tweet, response) {
  							if (!error) {
  								
  						
    					 } else { 

    					 				count  += 1;
    					 				var a = new Date();
								      var time2 = a.getTime();
    					 	// console.log ("-------------------------------------------------------------------------------------");
                   
  							//========================count number of tweets and get time taken ====================================
    					 		  	// console.log("***Number of Tweets read *** " + count + " Time (secs): " +  ((time2 - time1)/1000));
    					 		  	// console.log ("-------------------------------------------------------------------------------------");
	    					 }
	    				//	 console.log ("=========================Logic for Date Range  =========================================");
    					
  							// if (twitDate >= startDate) {
  							// 		// console.log(" Yup it's  >");
  							// if (twitDate <= endDate){ 
  							// 		// console.log(" Yup it's <");
  							// 		// console.log("< and OH yes, we got Data ");
  							// 	} else{ 
  							// 		// console.log("Out of search range, adjusting end Point");
  							// 		// endDate = twitDate;
  							// 		// console.log("writing available info");
  							// 		 }
  						 //=============================================================================================================
  										

            // console.log("****" + (event.text).indexOf(searchCreteria) + "****");
             	if ((event.text).indexOf(searchCreteria) === -1){
             		
             	//	console.log("skipping to next tweet!!!. as " + searchCreteria + " not FOUND in:  " + event.text);
             //	console.log("skipping to next tweet!!!. as " + searchCreteria + " not FOUND!!");
             	}else { 
             		//			console.log(" Found' " + searchCreteria + " ' in tweet text: " + event.text);
             					countProcess++;
 				             }// move to end of prinout
                 
//=========This section checks the username for male, female  or neutral ids ========================="); 
   
    					    var pickSex = '';
         					var res = [];
         					res = (event.user.name.split(' '));
	             		var fName = res[0].toLowerCase().trim();
	             		fName = fName.replace(/[^a-zA-Z0-9]/g,'');

	             		if ((menNames.indexOf(fName)) !== -1) {
	             			pickSex = 'm';
	             			 maleCnt++;
	             		} else if (femaleNames1.indexOf(fName) !== -1) {
				             					 pickSex = 'f';
				             					 femaleCnt++;
				          } else if (femaleNames2.indexOf(fName) !== -1) {
				             					 pickSex = 'f';
				             					 femaleCnt++;
				          } else if (femaleNames3.indexOf(fName) !== -1) {
				             					 pickSex = 'f';
				             					 femaleCnt++;
				          } else if (femaleNames4.indexOf(fName) !== -1) {
				             					 pickSex = 'f';
				             					 femaleCnt++;
			            } else {pickSex = ''; 
			                      otherCnt++;
			            }	 
			            //================================This section checks the text string for positive, negative or neutral words ====================================================
			            posWords = 0;
			            negWords = 0;
			            neuWords = 0;
			            blankWords = 0;
			            var textWord = [];
         					textWord = (event.text.split( ' '));
         					for (var t=0; t<textWord.length; t++){

		         					var wordFind = textWord[t].toLowerCase().trim();
			             		wordFind = wordFind.replace(/[^a-zA-Z0-9]/g,'');

			             		if ((positiveWords.indexOf(wordFind)) !== -1) {
			             			
			             				posWords++;
			            	 	} else if ((negativeWords.indexOf(wordFind)) !== -1) {
			            	 		negWords++;
			            	 	}else if (wordFind === "" || wordFind === " "){ 
			            	 		       blankWords++
			            	 				} else {neuWords++;
			            	 			   	}
			            	 	}
              //=======================================================================================
              	if(event.entities.hashtags.length > 0 ) { 
									event.entities.hashtags.forEach(hashItems);
							//			};
    					  } else {
    					  // console.log(JSON.stringify("hashtags           = []" ));
    					  }
										  
					    //======================================================================================== 
    				     console.log ("===========================================================================================");
    					  // console.log(JSON.stringify(event, null, 2));
    					   // console.log ("===========================================================================================");
    					   console.log(JSON.stringify('search Criteria    = ' + searchCreteria));
    					   console.log(JSON.stringify('Created on         = ' + event.created_at));
    					   console.log(JSON.stringify('User Name          = ' + event.user.name));
    					   console.log(JSON.stringify('Screen_name        = ' + event.user.screen_name));
    					   console.log(JSON.stringify('User Id            = ' + event.id));
    					   console.log(JSON.stringify('Tweet Id           = '+ event.id_str));
    					   console.log(JSON.stringify('Tweet text         = ' + event.text));
    					   console.log(JSON.stringify('time zone          = ' + event.user.time_zone));
    					   console.log(JSON.stringify("location           = " + event.user.location));
    					   console.log(JSON.stringify("followers          = " + event.user.followers_count));
    					   console.log(JSON.stringify("statuses           = " + event.user.statuses_count));
    					   console.log(JSON.stringify("Quote count        = " + event.quote_count));
    					   console.log(JSON.stringify("Reply count        = " + event.reply_count));
    					   console.log(JSON.stringify("Retweet count      = " + event.retweet_count));
    					   console.log(JSON.stringify("Favoritecount      = " + event.favorite_count));
            		 console.log(JSON.stringify("language           = " + event.user.lang));
            		                console.log('Hashtag number     = ' + hashtagArray);
//=========================================================================
// quote_count	Integer	
// Nullable. Indicates approximately how many times this Tweet has been quoted by Twitter users. Example:
// "quote_count":1138
// reply_count	Int	
// Number of times this Tweet has been replied to. Example:
// "reply_count":1585
// retweet_count	Int	
// Number of times this Tweet has been retweeted. Example:
// "retweet_count":1585
// favorite_count	Integer	
// Nullable. Indicates approximately how many times this Tweet has been liked by Twitter users. Example:
// "favorite_count":1138



//======================================================================
            		 
    					   console.log("--------Summary- of -words----------"); 
		             console.log(' Positive Word Count     = ' + posWords);
		             tPosWords += posWords; 
		             console.log(' Negative Word Count     = ' + negWords);
		             tNegWords += negWords
		             console.log(' Neutral Word Count      = ' + neuWords);
		             tNeuWords += neuWords;
		             console.log(' Blank Word Count        = ' + blankWords);
		             console.log('                           ----');
		             console.log(' Words in String         = ' + textWord.length);
		             console.log("");
            		 console.log("----------Summary of Totals------------------------");
		             console.log(' # Female Tweeters       = ' + femaleCnt);
		             console.log(' # Male Tweeters         = ' + maleCnt);
		             console.log(' # Unidentified Tweeters = ' + otherCnt);
		             console.log(' # Tweet Processed       = ' + countProcess);
		             console.log(' # Tweet Not Processed   = ' + (count - countProcess));
		             console.log('                          ----');
		             console.log(' # Total  Tweeters       = ' + count);
		             console.log(' # Time to Read Tweets   = ' + ((time2 - time1)/1000) + " secs");
		             console.log('');
		             console.log(' # Positive Words        = ' + tPosWords);
		             console.log(' # Negative Words        = ' + tNegWords);
		             console.log(' # Nuetral  Words        = ' + tNeuWords);
		             console.log("----------------------------------------------------");
    					  console.log ("===========================================================================================");

									//===================Writing Tweeterr object into an array ==============================================
									
 
							//		var file = './tweetAggra.json'
																			var tweets=  {search_Criteria     :      searchCreteria,
																										created_On          :      event.created_at,
																										search_Criteria     :      searchCreteria,
										        												created_On          :      event.created_at,
										         										  	user_Name		        :      event.user.name,
										        												user_Id             :      event.id,
						    					  												tweet_Id            :      event.id_str ,
						    					  												tweet_Text          :      event.text,
						    					  												time_Zone           :      event.user.time_zone,
						    					  												location            :      event.user.location,
						    					  												followers           :      event.user.followers_count,
						    					  												likes               :      event.user.favourites_count,
						    					  												language            :      event.user.lang,
						    					  												statuses            :      event.user.statuses_count,
						    					  												quote_Count         :      event.quote_count,
    					   																		reply_Count         :      event.reply_count,
    					    																	retweet_Count       :      event.retweet_count,
    																								favorite_Count       :      event.favorite_count,
						    					  												quote_Count         :      event.quote_count,
						    					  												hashtags            :      hashtagArray
						    					  												};	

                                		
						   									 var summary = { 	  female_Tweeters     :      femaleCnt,
		                        												male_Tweeters       :      maleCnt,
		                        												unidentified_Tweeters :    otherCnt,
		                        												tweets_Processed    :      countProcess,
		             																		tweet_Not_Processed :      (count - countProcess),		              
							              												total_Tweeters      :       count,
							              												time_to_Read_Tweets :      ((time2 - time1)/1000), 
							              												total_Positive_Words:      tPosWords,
							              												total_Negative_Words :     tNegWords,
							              										    total_Neutral_Words  :     tNeuWords
							              										  };

							    //=======================================================================
							    if (!initFile) {  

									
										//console.log("FILE = " + file);
										jsonfile.writeFile(datafile, tweets, { spaces: 2}, function (err) {
  											console.error(err);
										});
										jsonfile.writeFile(datasummary, summary, { spaces: 2}, function (err) {
  											console.error(err);
										});
										initFile = true;
									}else { 
											if (count <= 100 ) { 
										//=======================================================================														
												//		jsonfile.writeFile(datafile, tweets, { spaces: 2, flag: 'a'}, function (err) {
														jsonfile.writeFile(datafile, tweets, { spaces: 2, EOL: '\r\n'}, function (err) {
	 													console.error(err)
														});
														jsonfile.writeFile(datasummary, summary, { spaces: 2}, function (err) {
  													console.error(err);
														});
														// 	jsonfile.writeFile(datafile, comma, {flag: 'a'}, function (err) {
	 												// 	console.error(err)
														// });
														initFile = true;

											}else {
																console.log('');
																console.log('100 Records loaded ');
																console.log('');
																process.exit(0);
														}
											}				
									// }
					
								 	hashtagArray =[];
									//========================================================================================================	
										

								});  
						});
										stream.on('error', function(error) {
 										throw error;
											});

										//========================

}

//==============================================================================================
function hashItems(hashtag, index, array) {
					hashtagArray.push('#' + hashtag.text );
  							//	console.log('hashtag number:  ' + (index + 1 ) + ' = #' + hashtag.text);
  							// console.log('hashtag number :' + hashtagArray);
}  
//==============================================================================================
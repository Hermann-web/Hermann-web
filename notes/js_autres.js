
var DICT = [
{"id":0, "title":"Des gens sont-ils bêtes ? ","author":"H.A","url":"#","date":"27/05/2022",
"text":`Si quelqu'un refléchis, comment dire qu'il est bête ? Il a juste une manière différente de voir les choses, peut-être plus locale, plus globale ou plus différée; en tout cas différente.`,
"field":"theorèmes de l'autre"},
{"id":1, "title":"Ceux qui aiment conseiller","author":"H.A","url":"#","date":"27/05/2022",
"text":`Comment dire que quelqu'un agit contre ses intérêts ? 
Tout le monde agit pour une raison. Pourquoi alors définir à la place de quelqu'un, ses propres intérêts personnels ?
Rappeller à la personne la balance est une bonne idée.
`,
"field":"theorèmes de l'autre"},
{"id":0, "title":"Le bon sens, ce mythe","author":"H.A","url":"#","date":"27/05/2022",
"text":`Le bon sens est la chose du monde la moins partagée. Comment définir le bon sens alors que même deux personnes de la même famille ont vécu des expériences différentes dans leur vie ? Le fameux "bon sens" mal utilisé viendrait des morales de la religion, l’éducation, .
.. qui ne sont pas du tout partagées en tant valeurs humaines. Car chacun se fait une opinion de qu'il reçoit comme règle. Et c'est pour ça qu'il faut les lois.`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"Je veux être riche","author":"H.A","url":"#","date":"27/05/2022",
"text":`L'argent appelle L'argent. La drogue appelle la drogue. Ça se nomme une addiction. Certains sont addicts, d'autres non. Une addiction crée un manque puis un plaisir, un malheur puis un bonheur, et celà de façon cyclique. C'est pour celà que les pauvres gens continuent de débattre sur l'argent qui devrait faire ou non, le bonheur. C'est aussi pour celà on dit que l'argent est un mauvais maître.`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"Que fait nos différences ?","author":"H.A","url":"#","date":"27/05/2022",
"text":`De toutes les différences entre les hommes, il y a un qui est plus grand que tous les autres. On n'apprends pas les mêmes informations des mêmes événements.`,
"field":"-----------"},
  
{"id":0, "title":"Evitons le mot \"mieux\" !","author":"H.A","url":"#","date":"27/05/2022",
"text":`Le mot \"mieux"\, en tant qu'adverbe ou adjectif ne devrait plus être utilisé. Ce mot cache les pensées du locuteur et est souvent source des divergences d'interprétation. Chaque \"mieux\" dans une phrase est la définition d'un problème d'optimisation avec d'une part, une variable (souvent défini  par le contexte) et d'autre part, une fonction norme non définie ( à minimiser ou maximiser ou à limiter).  Chaque personne remplace alors "mieux" une norme qu'elle choisit, ce qui peut mener à des incompréhensions difficilement détectables. 
`,
"field":"Depasser la peur de se tromper"},
  
{"id":0, "title":"Objectifs et bonheur: partie 1","author":"H.A","url":"#","date":"27/05/2022",
"text":`Le "je ne sais pas" n'est pas tellement une réponse dans un contexte d'innovation car ça signifie qu'on a pas la réponse. Mais, ce n'est pas parce-qu'on n'a pas la réponse qu'on n'a pas des idées sur ce que la réponse pourrait être. 
De même, à défaut d'avoir une information, on peut faire un guess et ajouter "peut-être". Ça aide beaucoup en innovation et en travaux d'équipes quand l'athmosphère encourage cette forme de prise d'initiatives. Ex: le brainstorming. Autrement, celà peut être perçu comme du bavardage.
`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"Act quick, Think first","author":"H.A","url":"#","date":"27/05/2022",
"text":`Qu'est ce qui est plus grave ? Décider de ne pas réfléchir ou décider de ne pas agir ?
`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"Faire des maths","author":"H.A","url":"#","date":"27/05/2022",
"text":`Au lycée, des élève commencent à croire que ce qu'ils apprennent en math est inutile. En réalité, faire des maths crée de nouvelles connexions cérébrales qui permettent de résoudre plus tard, des problèmes qu'on vu pour la première fois.
`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"Ce à quoi sert la vie ?","author":"H.A","url":"#","date":"27/05/2022",
"text":`Work for a community, the futures differents version of yourself. Make sure not to impact their feelings in a bad way.
`,
"field":"theorèmes de l'autre"},
  
{"id":0, "title":"You don't know what you have till it's gone","author":"H.A","url":"#","date":"27/05/2022",
"text":`People value what they want or what they might lose over what they actually have.
The biais, used by commercials can be applied in work efficience. Give a raise every year. Remove the raise for low performer ones. Nope, it is a long shot game. Maybe, something quick like gadgets, free meals, ....
But make sure you don't get sued; make sure it improve work rather than lowering self esteem 
`,
"field":"theorèmes de l'autre"},

{"id":0, "title":"Que faire de ses problèmes personnels ?","author":"H.A","url":"#","date":"27/05/2022",
"text":`Pour s'autoévaluer, on peut se demander ce qu'on devrait faire, qu'on sait que c'est à faire mais qu'on ne fait pas. Simple et révélateur`,
"field":"theorèmes de l'autre"},

];

if(typeof(String.prototype.trim) === "undefined")
{
String.prototype.trim = function() 
{
    return String(this).replace(/^\s+|\s+$/g, '');
};
}
var mygroup = document.getElementById("my-group");
DICT.forEach((elt, id)=>{
var W30 = document.createElement('div');
W30.classList.add("w-30");
var CTN = document.createElement('div');
CTN.classList.add("container");
h1 = document.createElement('h3');
h1.style["text-align"] = "center"
h1.textContent = elt["title"]
h1.style["color"] = "blue"
h1.classList.add("btn");
//h1.classList.add("btn-info");
h1.classList.add("collapsible");

p1 = document.createElement('p');
p1.textContent = "----------"
p1.style["text-align"] = "center"
p1.style["color"] = "rgba(255,0,0,0.5)"
p1.style["font-size"] = "15px"
p1.style["margin-bottom"] = "0px"

blockquote = document.createElement('blockquote');
//blockquote.classList.add("content");
//blockquote.scrollHeight = "10px"
p2 = document.createElement('p');
p2.innerHTML = "\""+elt["text"].trim().replaceAll('\n',"<div style='heigth:2px'></div>")+"\""
//p2.style["font-size"] = "15px"
//p2.style["fcolor"] = "#333"


footer = document.createElement('footer');
footer.innerHTML = elt["author"] + ", " + "<a href='" + elt["url"] + "'>" + elt["field"] + "</a>" + ", " + elt["date"]


blockquote.appendChild(p2);
blockquote.appendChild(footer);

CTN.appendChild(h1);
CTN.appendChild(p1);
CTN.appendChild(blockquote);
mygroup.appendChild(CTN)
})


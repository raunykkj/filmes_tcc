

/*-------------------- INSERT USUARIOS --------------------*/

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(1, 'arthur-souza94@silicotex.net', 'Arthur João Souza', '1998-10-30', '(14)90000-0000', '123456', true);

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(2, 'calebefabiomendes@performa.com.br', 'Calebe Fábio Thiago Mendes', '2000-02-24', '(21)25148-0310', '260278', false);

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(3, 'carlacarlamendes@julianacaran.com.br', 'Carla Carla Mendes', '2005-12-01', '(65)99879-3288', '78907', false);

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(4, 'luan.breno.gomes@sadefem.com.br', 'Luan Breno Gomes', '2005-02-22', '(65)99496-8560', '4569807', false);

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(5, 'laura.betina.figueiredo@delfrateinfo.com.br', 'Laura Betina Fernanda Figueiredo', '2005-07-14', '(14)99795-5955', '24877', false);

INSERT INTO USUARIOS (usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES 
(6, 'raunykkj@gmail.com', 'Rauny Aruam De Oliveira Reis', '2006-05-23', '(14)99845-2862', '23052006', false);



/*-------------------- INSERT PERFIS --------------------*/

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(1, 2, 'calebe.png', 'calebe'); 

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(2, 2, 'rebeca.png', 'rebeca');

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(3, 2, 'joao.png', 'joao');

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(4, 3, 'carlaMendes.png', 'carlaMendes');

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(5, 4, 'luanbrenin.png', 'luanbrenin');

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(6, 5, 'laurabetina.png', 'laurabetina');

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(7, 5, 'martina.png', 'martina'); 

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(8, 6, 'raunyk.png', 'raunyk'); 

INSERT INTO PERFIS (perf_cod, usu_cod, perf_foto, perf_nome) VALUES
(9, 6, 'mouses.png', 'mouses');



/*-------------------- INSERT FILMES --------------------*/


INSERT INTO FILMES (fme_cod, fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link) VALUES
(1, 'GATOS NO MUSEU', ' Vasiliy Rovenskiy', 20230810, '5', 'Um jovem gato chamado Vincent, na companhia do rato Maurice, escapa de uma enchente e é recolhido por marinheiros. Enviado a São Petersburgo, lá Vincent conhece um esquadrão felino de elite no Museu Hermitage, que protege as obras de arte de ratos e outras pragas há séculos. Vincent sonha em encontrar uma verdadeira família felina, mas não quer perder seu amigo Maurice, que salvou sua vida. Vincent então terá que esconder seu amigo, que também tem uma "pequena fraqueza" - Maurice adora roer obras-primas da pintura. A situação se complica ainda mais quando uma das maiores pinturas da humanidade, a Mona Lisa, chega ao Museu, e é o sonho de todos os ratos roê-la. Mas nem Vincent, nem Maurice, nem os gatos do Museu Hermitage suspeitam que a pintura será roubada.',
'83', 'Russo', '1', 'Licensing Brands', 'https://youtu.be/f9zX-Ferrcg');

INSERT INTO FILMES (fme_cod, fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link) VALUES
(2, 'DRÁCULA - A ÚLTIMA VIAGEM DO DEMÉTER', ' André Øvredal', 20230824, '25', 'Em Drácula - A Última Viagem do Deméter, inspirado na icônica lenda do vampiro Drácula, acompanhamos a terrível história do navio Deméter, que foi fretado para transportar cargas particulares. Estranhos eventos acontecem à tripulação, que tenta sobreviver à viagem oceânica, perseguidos todas as noites por uma presença impiedosa a bordo do navio. Quando o Deméter finalmente chega à costa, é apenas um navio carbonizado e abandonado. Não há vestígios da tripulação. A trama se baseia em um único capítulo do livro clássico de Bram Stoker.',
'118', 'Ingles', '16', 'DreamWorks SKG', 'https://youtu.be/FwgF3-3LYsg');

INSERT INTO FILMES (fme_cod, fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link) VALUES
(3, 'O RESGATE', 'Steven Spielberg', 19980911, '13', 'Ao desembarcar na Normandia, no dia 6 de junho de 1944, capitão Miller (Tom Hanks) recebe a missão de comandar um grupo do segundo batalhão para o resgate do soldado James Ryan, caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa',
'163', 'Tcheco', '14', 'Paramount Pictures', 'https://youtu.be/1AEqQEG8DW0');

INSERT INTO FILMES (fme_cod, fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link) VALUES
(4, 'HOMEM-ARANHA: ATRAVÉS DO ARANHAVERSO', ' Joaquim Dos Santos,', 20230601, '1', 'Homem-Aranha: Através do Aranhaverso, é a continuação do vencedor do Oscar Homem-Aranha: No Aranhaverso, de 2018, que acompanha Miles Morales (Shameik Moore), o simpático Homem-Aranha do Brooklyn. Neste novo capítulo, Miles está de volta para uma nova missão em sua agitada vida como super herói. No novo filme, Morales é transportado para uma aventura épica através do multiverso, e deve unir forças com a mulher-aranha Gwen Stacy (Hailee Steinfeld) e um novo time de Pessoas-Aranha, formado por heróis de diversas dimensões. No entanto, tudo muda quando os heróis entram em conflito sobre como lidar com uma nova ameaça, e Miles se vê em um impasse. E para piorar ainda mais a situação, eles precisam enfrentar um vilão muito mais poderoso do que qualquer coisa que já tenham encontrado antes. Agora, para salvar as pessoas que ele mais ama no mundo, Miles deve redefinir o que significa ser um super herói.',
'141', 'Ingles', '1', 'Marvel Entertainment', 'https://youtu.be/LZBlXkDvhh4');


/*-------------------- INSERT ATORES --------------------*/


INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(1,'Will Smith','1968-09-25','https://i.pinimg.com/564x/4c/66/4d/4c664dc23e19fada7f9ff96f0f90043d.jpg');

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(2,'Leonardo Dicaprio','1974-09-11','https://i.pinimg.com/564x/f1/7f/d2/f17fd2964af8c01be31267b9b7207098.jpg');

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(3, 'Jakie Chan', '1954-04-07', 'https://i.pinimg.com/564x/ec/76/c2/ec76c28186d2b2edb50101bb2f3351ff.jpg');

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(4, 'Tom Cruise', '1962-07-03', 'https://i.pinimg.com/564x/03/ae/d1/03aed134302262c87170cb135ff8436f.jpg'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(5, 'Polina Sergeyevna Gagarina', '1987-03-27', 'https://m.media-amazon.com/images/M/MV5BMTRmZDNiMjctMTI5Yy00YjMwLTk3MjQtNGM2YTdhZGEwN2M5XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(6, 'Pavel Valerievich Priluchny', '1987-05-11', 'https://i.pinimg.com/236x/62/9b/2a/629b2a783175ead97c70a40ae558ee0b.jpg'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(7, 'Roman Dmitrievich Kurtsyn', '1985-03-14', 'https://www.yarfilm.com/uploaded/4/0/4099b207b223a9dfa05468f18e151e33.png'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(8, 'Javier Botet López', '1977-07-30', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGvzhDA5MLjgWVokGSn8R3jLlVerYvaW2iw&usqp=CAU'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(9, 'Corey Antonio Hawkins', '1988-10-22', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgx7pya_UlIh1LsY265WMjiDEq0xl38-yYnA&usqp=CAU'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(10, 'Aisling Franciosi', '1993-06-06', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdzHlwNlfUsInaP6VCkPDuFmSiIAI1uZdZg&usqp=CAU'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(11, 'Liam Cunningham', '1961-06-02', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzDgODQYaMw9P1hzQ2YoMLjyw0V8KjT_FuQ&usqp=CAU'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(12, 'Christopher Hemsworth', '1983-08-11', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF59v4tTZN3zzDmpqbT4hwwKf3ckMkasXfgg&usqp=CAU'); 

INSERT INTO ATORES (at_cod, at_nome, at_dtnasc, at_img) VALUES
(13, 'Daniel Kaluuya', '1989-02-24', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WoAUSn2K0G1sx-sJG_Tsm19IVFmtV7TfUw&usqp=CAU'); 

/*-------------------- FILMES ATORES --------------------*/


INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(1, 5, 'Kleopatra');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(1, 6, 'Maks');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(1, 7, 'Vinsent');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(2, 8, 'Drácula');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(2, 9, 'Clemens');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(2, 10, 'Anna');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(2, 11, 'Captain Eliot');

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(3, 12, 'Tyler Rake'); 

INSERT INTO FILME_ATORES (fme_cod, at_cod, fme_at_papel) VALUES
(4, 13, 'Spider-Punk');



/*------------------- USUARIOS_FILMES -------------------*/


INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(1, 1, 1, true, true, true, '1:03', 'Filme muito bom', true);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(2, 1, 2, true, false, true, '0:34', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(3, 1, 3, true, false, false, '0:00', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(4, 1, 4, true, false, false, '0:00', null, false);

INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(5, 2, 4, true, true, false, '0:00', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(6, 3, 4, true, true, false, '0:00', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(7, 4, 4, true, true, false, '0:00', null, false);

INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(8, 5, 1, true, false, true, '0:19', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(9, 6, 1, true, false, true, '0:39', null, false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(10, 7, 1, true, false, true, '0:50', 'Ainda não teminei', false);
INSERT INTO USUARIOS_FILMES (usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES
(11, 7, 2, false, true, false, '0:00', 'Filme fraco', true);
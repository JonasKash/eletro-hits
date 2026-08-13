export const PRODUTO = {
  slug: "hits-2010",
  nome: "Hits 2010",
  nomeCompleto: "Mix Hits 2010",
  tagline: "Mais de 5 horas de música em uma playlist só",
};

export const PRECO = 10;

export const PREVIAS = [
  { arquivo: "/audio/previa-01.mp3", titulo: "Sequência 01", descricao: "Pop internacional e eletro-pop" },
  { arquivo: "/audio/previa-02.mp3", titulo: "Sequência 02", descricao: "EDM e sertanejo universitário" },
  { arquivo: "/audio/previa-03.mp3", titulo: "Sequência 03", descricao: "Pop urbano e funk nacional" },
  { arquivo: "/audio/previa-04.mp3", titulo: "Sequência 04", descricao: "Reggaeton e pop latino" },
];

export const TRACKLIST = [
  { tempo: "03:06", artista: "Alexandra Stan", musica: "Mr. Saxobeat" },
  { tempo: "05:15", artista: "Bob Sinclar", musica: "Love Generation" },
  { tempo: "09:14", artista: "Tiko's Groove feat. Gosha", musica: "I Don't Know What To Do" },
  { tempo: "12:54", artista: "Kasino", musica: "Can't Get Over" },
  { tempo: "15:53", artista: "Calvin Harris", musica: "I Need Your Love" },
  { tempo: "18:15", artista: "Ian Carey", musica: "Keep on Rising" },
  { tempo: "21:00", artista: "Mason vs Princess Superstar", musica: "Perfect Exceeder" },
  { tempo: "24:55", artista: "Global Deejays", musica: "The Sound of San Francisco" },
  { tempo: "28:40", artista: "Akcent", musica: "That's My Name" },
  { tempo: "33:00", artista: "Chris Brown & Benny Benassi", musica: "Beautiful People" },
  { tempo: "35:30", artista: "Pitbull ft. Ne-Yo, Afrojack, Nayer", musica: "Give Me Everything" },
  { tempo: "38:35", artista: "David Guetta feat. Kid Cudi", musica: "Memories" },
  { tempo: "41:26", artista: "David Guetta vs The Egg", musica: "Love Don't Let Me Go" },
  { tempo: "43:21", artista: "Tiga", musica: "You Gonna Want Me" },
  { tempo: "45:16", artista: "DJ Antoine vs Timati feat. Kalenna", musica: "Welcome to St. Tropez" },
  { tempo: "48:15", artista: "Eurythmics x Mr. Belt & Wezol", musica: "Sweet Dreams x It's Not Right" },
  { tempo: "50:30", artista: "LMFAO ft. Lauren Bennett, GoonRock", musica: "Party Rock Anthem" },
  { tempo: "53:06", artista: "David Guetta", musica: "The World Is Mine" },
  { tempo: "55:26", artista: "David Guetta feat. Kelly Rowland", musica: "When Love Takes Over" },
  { tempo: "58:33", artista: "Sean Kingston", musica: "Beautiful Girls" },
  { tempo: "01:00:28", artista: "Crazy Frog", musica: "Axel F" },
  { tempo: "01:02:40", artista: "Lasgo", musica: "Something" },
  { tempo: "01:05:36", artista: "September", musica: "Cry for You" },
  { tempo: "01:08:43", artista: "The Outfield x Edward Maya & Vika Jigulina", musica: "Your Love x Stereo Love" },
  { tempo: "01:12:41", artista: "David Guetta & Chris Willis", musica: "Love Is Gone" },
  { tempo: "01:16:30", artista: "Get Far", musica: "Shining Star" },
  { tempo: "01:19:00", artista: "Guru Josh Project", musica: "Infinity" },
  { tempo: "01:21:20", artista: "R.I.O.", musica: "Shine On" },
  { tempo: "01:25:05", artista: "Javi Mula", musica: "Come On" },
  { tempo: "01:27:48", artista: "The Underdog Project", musica: "Summer Jam" },
  { tempo: "01:30:43", artista: "Yves Larock", musica: "Rise Up" },
  { tempo: "01:33:37", artista: "Bingo Players", musica: "Cry (Just a Little)" },
  { tempo: "01:35:32", artista: "Fedde Le Grand ft. Ida Corr", musica: "Let Me Think About It" },
  { tempo: "01:38:11", artista: "LMFAO", musica: "I'm in Miami \"Beach\"" },
  { tempo: "01:40:38", artista: "AronChupa, Little Sis Nora", musica: "I'm an Albatraoz" },
  { tempo: "01:42:32", artista: "Corona", musica: "The Rhythm of the Night" },
  { tempo: "01:44:20", artista: "Erika", musica: "I Don't Know" },
  { tempo: "01:46:50", artista: "House Boulevard feat. Samara", musica: "Set Me Free" },
  { tempo: "01:49:40", artista: "Eiffel 65", musica: "Blue (Da Ba Dee)" },
  { tempo: "01:52:12", artista: "Gnarls Barkley", musica: "Crazy" },
  { tempo: "01:53:41", artista: "Bob Sinclar", musica: "World Hold On" },
  { tempo: "01:56:00", artista: "Pakito", musica: "Living on Video" },
  { tempo: "01:57:57", artista: "Alex Gaudino feat. Crystal Waters", musica: "Destination Calabria" },
  { tempo: "02:01:00", artista: "Calvin Harris feat. Ne-Yo", musica: "Let's Go" },
  { tempo: "02:03:50", artista: "Global Deejays", musica: "California Dreamin'" },
  { tempo: "02:07:30", artista: "Swedish House Mafia", musica: "One (Your Name)" },
  { tempo: "02:10:55", artista: "Daft Punk", musica: "One More Time" },
  { tempo: "02:12:40", artista: "Eamon & Florida Inc", musica: "F**k It" },
  { tempo: "02:15:00", artista: "Moony", musica: "I Don't Know Why" },
  { tempo: "02:16:50", artista: "Square Heads", musica: "Happy" },
];

export function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

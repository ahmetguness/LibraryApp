import Category from "../../models/category"

id = 0;

function idGenerator(){
    return id++;
}

export const CATEGORIES = [
  new Category(idGenerator(), 'Roman', '#FF6347', 'roman.jpg'),
  new Category(idGenerator(), 'Klasik', '#8A2BE2', 'klasik.jpg'),
  new Category(idGenerator(), 'Bilim Kurgu', '#00FFFF', 'bilim_kurgu.jpg'),
  new Category(idGenerator(), 'Korku/Gerilim', '#800000', 'korku_gerilim.jpg'),
  new Category(idGenerator(), 'Polisiye/Gizem', '#2F4F4F', 'polisiye_gizem.jpg'),
  new Category(idGenerator(), 'Macera', '#32CD32', 'macera.jpg'),
  new Category(idGenerator(), 'Romantik', '#FF69B4', 'romantik.jpg'),
  new Category(idGenerator(), 'Tarihi', '#8B4513', 'tarihi.jpg'),
  new Category(idGenerator(), 'Biyografi/Otomobilbiyografi', '#DAA520', 'biyografi.jpg'),
  new Category(idGenerator(), 'Deneme', '#6A5ACD', 'deneme.jpg'),
  new Category(idGenerator(), 'Felsefe', '#4682B4', 'felsefe.jpg'),
  new Category(idGenerator(), 'Psikoloji/Sosyoloji', '#FFD700', 'psikoloji.jpg'),
  new Category(idGenerator(), 'Politika', '#FF4500', 'politika.jpg'),
  new Category(idGenerator(), 'Bilim ve Teknoloji', '#008080', 'bilim_teknoloji.jpg'),
  new Category(idGenerator(), 'Sanat ve Tasarım', '#FFDAB9', 'sanat_tasarim.jpg'),
  new Category(idGenerator(), 'Müzik', '#9932CC', 'muzik.jpg'),
  new Category(idGenerator(), 'Spor ve Egzersiz', '#008000', 'spor_egzersiz.jpg'),
  new Category(idGenerator(), 'Gezi ve Yemek Kültürü', '#FFFF00', 'gezi_yemek.jpg'),
  new Category(idGenerator(), 'Mizah', '#FFA500', 'mizah.jpg'),
  new Category(idGenerator(), 'Drama/Tiyatro', '#800080', 'drama_tiyatro.jpg'),
  new Category(idGenerator(), 'Kurgusal Olmayan Hikaye/Yaşam Hikayeleri', '#FFE4E1', 'kurgusal.jpg'),
  new Category(idGenerator(), 'Çocuk Kitapları', '#FFC0CB', 'cocuk.jpg'),
  new Category(idGenerator(), 'Genç Yetişkin/Kişisel Gelişim', '#7B68EE', 'genc_yetiskin.jpg'),
  new Category(idGenerator(), 'İş ve Kariyer', '#2E8B57', 'is_kariyer.jpg'),
  new Category(idGenerator(), 'Doğa ve Doğa Bilimleri', '#556B2F', 'doga_bilimleri.jpg')
];

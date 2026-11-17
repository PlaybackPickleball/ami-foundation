import type { Locale } from './copy'
import { storyImage } from './media'

export type Story = {
  slug: string
  name: Record<Locale, string>
  role: Record<Locale, string>
  excerpt: Record<Locale, string>
  caption: Record<Locale, string>
  duration: string
  paragraphs: Record<Locale, string[]>
  image: string
  imageAlt: Record<Locale, string>
}

export const stories: Story[] = [
  {
    slug: 'uncle-ba',
    name: { en: 'Uncle Ba', vi: 'Ông Ba' },
    role: {
      en: 'Keeps a boat on the same post',
      vi: 'Giữ một chiếc thuyền ở cùng một cột',
    },
    excerpt: {
      en: 'He sleeps with one ear open when the river is high. The sample is a wish for a floor that stays dry.',
      vi: 'Nước lớn thì ông ngủ với một tai còn thức. Mẫu này là ước muốn một mặt sàn vẫn khô.',
    },
    caption: {
      en: 'He sleeps with one ear open when the river is high.',
      vi: 'Nước lớn thì ông ngủ với một tai còn thức.',
    },
    duration: '3:12',
    paragraphs: {
      en: [
        'Uncle Ba is a sample name for an older man who has kept one boat on one post for most of his life. In the telling, the post is a tree worn smooth by rope. He knows the sound the river makes the night before it changes its mind.',
        'What he asks for is ordinary. A floor raised past the usual high-water line. A place for the cooking pot that is not the boat. A door he can close without feeling he has shut the neighbors out. He is not a symbol. He is a way of showing the request in a full sentence.',
        'AMI would sit with a man like this before anyone ordered timber. The sample stops there. No house has been measured for Uncle Ba, because Uncle Ba is not a person we have met. He is here so the story page has a true weight.',
      ],
      vi: [
        'Ông Ba là một tên mẫu cho một người lớn tuổi, gần như cả đời buộc một chiếc thuyền vào một cột. Trong lời kể, cột ấy là một cây mòn nhẵn vì dây. Ông biết tiếng sông đêm trước khi nước đổi ý.',
        'Điều ông xin thì thường. Một mặt sàn cao hơn mực nước lớn quen thuộc. Một chỗ để nồi, không phải trên thuyền. Một cánh cửa ông đóng được mà không thấy mình đã khép hàng xóm ra ngoài. Ông không phải biểu tượng. Ông là cách để câu xin được nói trọn.',
        'AMI sẽ ngồi với một người như vậy trước khi ai gọi gỗ. Mẫu dừng ở đó. Không có ngôi nhà nào được đo cho ông Ba, vì ông Ba không phải người chúng tôi đã gặp. Ông ở đây để trang chuyện có sức nặng thật.',
      ],
    },
    image: storyImage('1474176857210-7287d38d27c6'),
    imageAlt: {
      en: 'Sample stock photograph of an older man smiling. This is not Uncle Ba.',
      vi: 'Ảnh kho mẫu: một người lớn tuổi đang mỉm cười. Đây không phải ông Ba.',
    },
  },
  {
    slug: 'mei-and-son',
    name: { en: 'Mei & Son', vi: 'Mai và con' },
    role: {
      en: 'A mother and a boy who share one lamp',
      vi: 'Một người mẹ và một cậu bé dùng chung một ngọn đèn',
    },
    excerpt: {
      en: 'Homework slides when the table is also the bed. The sample is a room where a page can lie still.',
      vi: 'Bài tập trượt khi cái bàn cũng là cái giường. Mẫu này là một phòng để trang giấy nằm yên.',
    },
    caption: {
      en: 'Homework slides when the table is also the bed.',
      vi: 'Bài tập trượt khi cái bàn cũng là cái giường.',
    },
    duration: '2:48',
    paragraphs: {
      en: [
        'Mei is a sample name. Her son is a sample child. In the story they walk to the road before the sun is fully up, because the first light is the dry part of the day. She carries his notebook inside a tin so the damp does not take the pencil marks.',
        'The chance in this story is small enough to be real: a table that is only a table, a lamp that lasts the evening, a teacher who still has his name in the roll. Opportunity, here, is not a distant scholarship. It is the hour after rice.',
        'We do not show a real child. The photograph is a stock picture of a parent and young children at home, chosen because it is calm. If a family ever tells this in their own words, the sample will come down.',
      ],
      vi: [
        'Mai là một tên mẫu. Con trai là một đứa trẻ mẫu. Trong chuyện, hai mẹ con đi ra đường trước khi nắng đủ, vì ánh sáng đầu là phần khô của ngày. Chị để vở của con trong một cái hộp thiếc, kẻo ẩm lấy mất nét chì.',
        'Cơ hội trong chuyện này nhỏ đủ để thật: một cái bàn chỉ là cái bàn, một ngọn đèn đủ cả buổi tối, một thầy còn giữ tên cậu trong sổ. Cơ hội ở đây không phải một học bổng ở xa. Nó là giờ sau bữa cơm.',
        'Chúng tôi không đưa một đứa trẻ thật lên trang. Ảnh là ảnh kho của một người lớn và những trẻ ở nhà, chọn vì nó yên. Nếu một gia đình kể chuyện này bằng lời của họ, mẫu sẽ được gỡ xuống.',
      ],
    },
    image: storyImage('1476703993599-0035a21b17a9'),
    imageAlt: {
      en: 'Sample stock photograph of a parent and children at home. This is not Mei or her son.',
      vi: 'Ảnh kho mẫu: một người lớn và những trẻ ở nhà. Đây không phải Mai hay con trai.',
    },
  },
  {
    slug: 'grandma-lan',
    name: { en: 'Grandma Lan', vi: 'Bà Lan' },
    role: {
      en: 'The courtyard is also the neighbors’ kitchen',
      vi: 'Cái sân cũng là bếp của những người láng giềng',
    },
    excerpt: {
      en: 'She knows who is short of rice before they say so. The sample is a community that already knows how to share.',
      vi: 'Bà biết nhà nào thiếu gạo trước khi họ nói. Mẫu này là một cộng đồng vốn đã biết chia nhau.',
    },
    caption: {
      en: 'She knows who is short of rice before they say so.',
      vi: 'Bà biết nhà nào thiếu gạo trước khi họ nói.',
    },
    duration: '4:05',
    paragraphs: {
      en: [
        'Grandma Lan is a sample. In it, she keeps a low garden and a pot that is larger than her own household needs. People stop in the yard without making an appointment. She tells the children which leaves are for soup.',
        'Community, in AMI’s language, is not a program that arrives to teach sharing. It is the sharing already underway. A foundation that cannot see that will build the wrong room. The sample says: begin by asking who already holds the extra bowl.',
        'Nothing here is a record of a real grandmother. The face in the photograph belongs to a photographer’s frame, not to a woman named Lan.',
      ],
      vi: [
        'Bà Lan là một mẫu. Trong mẫu, bà giữ một vườn thấp và một nồi lớn hơn nhà bà cần. Người ta ghé sân không hẹn. Bà chỉ cho trẻ lá nào để nấu canh.',
        'Cộng đồng, trong lời của AMI, không phải một chương trình đến để dạy người ta chia sẻ. Nó là sự chia sẻ đang có. Một quỹ không thấy điều đó sẽ xây nhầm phòng. Mẫu nói: hãy bắt đầu bằng câu hỏi ai đang giữ cái chén dư.',
        'Không có gì ở đây là hồ sơ của một bà thật. Khuôn mặt trong ảnh thuộc khung của người chụp, không thuộc một người tên Lan.',
      ],
    },
    image: storyImage('1566616213894-2d4e1baee5d8'),
    imageAlt: {
      en: 'Sample stock photograph of an older woman smiling. This is not Grandma Lan.',
      vi: 'Ảnh kho mẫu: một phụ nữ lớn tuổi đang mỉm cười. Đây không phải bà Lan.',
    },
  },
  {
    slug: 'tuan',
    name: { en: 'Tuan', vi: 'Tuấn' },
    role: {
      en: 'Can repair a motor, and wants the books that go with it',
      vi: 'Sửa được máy, và muốn những trang sách đi cùng nghề ấy',
    },
    excerpt: {
      en: 'He is good with his hands and tired of being told that skill is enough. The sample is a trade that includes the reading.',
      vi: 'Tay cậu giỏi, và cậu mệt vì nghe nói chỉ cần khéo tay. Mẫu này là một nghề có cả việc đọc.',
    },
    caption: {
      en: 'He is good with his hands, and tired of being told that is enough.',
      vi: 'Tay cậu giỏi, và cậu mệt vì nghe nói chỉ cần khéo tay.',
    },
    duration: '2:36',
    paragraphs: {
      en: [
        'Tuan is a sample of a young man who can take a motor apart on a mat by the water. People trust him with the engine. They do not always trust him with the ledger, the manual, or the form that asks for a signature in the city.',
        'The opportunity in his story is an apprenticeship that does not send him away: evenings for the reading, days for the repair, a teacher who will come to the landing rather than require the landing to empty itself. For him, sustainable means the river still has work, and the work has a future he can read.',
        'This is not a profile of a real apprentice. When there is a real one, he will decide what is told.',
      ],
      vi: [
        'Tuấn là mẫu một thanh niên tháo được một cái máy trên chiếc chiếu bên nước. Người ta tin cậu với cái máy. Họ không luôn tin cậu với sổ sách, với tập hướng dẫn, hay với tờ đơn đòi một chữ ký ở phố.',
        'Cơ hội trong chuyện của cậu là một kỳ học nghề không đẩy cậu đi: tối để đọc, ngày để sửa, một người dạy chịu đến bến chứ không bắt bến phải vắng người. Với cậu, bền vững nghĩa là sông vẫn còn việc, và việc ấy có một tương lai cậu đọc được.',
        'Đây không phải hồ sơ một người học việc thật. Khi có người thật, chính người ấy sẽ quyết điều gì được kể.',
      ],
    },
    image: storyImage('1566492031773-4f4e44671857'),
    imageAlt: {
      en: 'Sample stock photograph of a young man. This is not Tuan.',
      vi: 'Ảnh kho mẫu: một thanh niên. Đây không phải Tuấn.',
    },
  },
]

export function storyBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return stories.find((story) => story.slug === slug)
}

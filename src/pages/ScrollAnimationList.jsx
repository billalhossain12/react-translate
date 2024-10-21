import React, { useEffect, useState } from 'react';

const ScrollAnimationList = () => {
  const items = [
    'DRAKE',
    'BAD BUNNY',
    'LINKIN PARK',
    'PESO PLUMA',
    'KENDRICK LAMAR',
    'EVERYTHING ALWAYS',
    'RAUW ALEJANDRO',
    'TRAVIS SCOTT',
    'BABY KEEM',
    'REDBULL',
    'ROSALÍA',
    'BACARDI',
  ];

  const [scrollIndex, setScrollIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const index = Math.floor(scrollPosition / 100); // Adjust divisor for speed
      if (index < items.length) {
        setScrollIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items.length]);

  return (
   <>
   <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam distinctio quibusdam ut accusamus vitae officiis, provident enim repudiandae natus deserunt eaque ipsa fugiat saepe maiores repellendus nihil reprehenderit mollitia, libero expedita odit dolorem nisi beatae! Alias consequuntur dolores provident autem velit minima reiciendis veniam totam, nesciunt, officia hic, nulla facere vero cupiditate dolore esse! Similique recusandae consequatur obcaecati, voluptates ipsum suscipit tempora error quaerat vitae excepturi consectetur explicabo ducimus placeat veritatis aliquam quae laudantium velit labore assumenda fugiat minima! Iure, amet dicta? Repellendus ducimus necessitatibus esse id dolor, assumenda laborum doloremque magni at explicabo ullam. Neque quisquam, quas expedita dicta labore libero laudantium nam accusamus nihil ducimus obcaecati aliquam dolores fugit nisi provident laboriosam iure doloremque voluptatibus quibusdam. Excepturi commodi fugit nisi animi mollitia ea harum saepe quo blanditiis enim! Praesentium quisquam tempora animi officia possimus nemo ut veniam maiores officiis aliquid id, sint placeat quos velit quidem mollitia est pariatur ipsam quasi iste reiciendis! Obcaecati quaerat sapiente vel earum, molestias aliquid in nam exercitationem optio aut numquam sunt temporibus fugit consectetur necessitatibus porro, fugiat quidem laborum modi cum dicta! Porro, quos. Nisi dicta officiis id, eveniet placeat suscipit voluptate perspiciatis nam pariatur, possimus beatae minus rem. Quo, consectetur! Perferendis cumque eos ab doloremque sed nisi delectus a expedita quia dignissimos sequi libero ullam itaque facere quasi voluptatem odit fugiat, animi eligendi est. Eum consequatur soluta aspernatur vel quas assumenda saepe minima. Provident laudantium cum, placeat numquam deleniti eligendi amet aperiam ea inventore voluptate quaerat, commodi ad voluptatum, veritatis doloremque voluptatibus vero adipisci rerum fugit sed. Animi, voluptate sunt reprehenderit alias amet aspernatur quis ipsam reiciendis dignissimos, ipsum, mollitia ullam? Porro, sit accusantium aliquid quod reprehenderit nam atque tempora hic quo accusamus, maxime adipisci soluta non tempore, velit eius optio eligendi suscipit. Totam veritatis ea odio iste. Odit culpa delectus tempore sed tempora iusto fugiat aperiam laboriosam? Molestiae illum labore numquam a incidunt expedita exercitationem consectetur aspernatur magnam reiciendis iure voluptatum modi qui suscipit vitae neque odit error, deleniti nostrum temporibus rem. Laborum quo explicabo sit suscipit quod quam, dolor reiciendis soluta, pariatur a fugiat nihil, cumque voluptate deleniti veritatis? Necessitatibus vitae, voluptates numquam commodi facere quod distinctio fuga odio, ipsa iusto perferendis iste. Odio hic quibusdam quam eos, nam accusantium eligendi voluptatem perferendis commodi illo eaque, praesentium, facilis quod fuga esse eius tenetur. Dolorum ducimus repellendus dicta a nobis! Esse vero dolore accusamus architecto id nisi dolorum libero sequi qui! Doloremque, ut error nesciunt soluta ex molestias tempora nemo omnis eum illo sapiente natus tempore nam reiciendis nihil labore fugiat? Eum quae sit alias perspiciatis! Fuga ullam aliquid quos! Perspiciatis, tempora rerum corporis veniam illum deleniti labore quasi voluptatem! Debitis nisi totam possimus molestias quidem, blanditiis eveniet aut similique ab eius alias soluta tenetur neque vel asperiores provident non, nobis nostrum eligendi voluptas quos iure error. Vel, eum? Expedita, officia sed! Quia non qui ratione tempore soluta expedita maiores libero modi error ipsa, eveniet voluptatibus impedit, in ex quaerat dicta quis reprehenderit placeat sunt perferendis! Harum, aliquid nisi.</p>
   </div>
    <ul className="mt-20">
      {items.map((item, index) => (
        <li
          key={index}
          className={`transition-all duration-300 ${
            index <= scrollIndex ? 'text-right' : 'text-left'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>

    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam distinctio quibusdam ut accusamus vitae officiis, provident enim repudiandae natus deserunt eaque ipsa fugiat saepe maiores repellendus nihil reprehenderit mollitia, libero expedita odit dolorem nisi beatae! Alias consequuntur dolores provident autem velit minima reiciendis veniam totam, nesciunt, officia hic, nulla facere vero cupiditate dolore esse! Similique recusandae consequatur obcaecati, voluptates ipsum suscipit tempora error quaerat vitae excepturi consectetur explicabo ducimus placeat veritatis aliquam quae laudantium velit labore assumenda fugiat minima! Iure, amet dicta? Repellendus ducimus necessitatibus esse id dolor, assumenda laborum doloremque magni at explicabo ullam. Neque quisquam, quas expedita dicta labore libero laudantium nam accusamus nihil ducimus obcaecati aliquam dolores fugit nisi provident laboriosam iure doloremque voluptatibus quibusdam. Excepturi commodi fugit nisi animi mollitia ea harum saepe quo blanditiis enim! Praesentium quisquam tempora animi officia possimus nemo ut veniam maiores officiis aliquid id, sint placeat quos velit quidem mollitia est pariatur ipsam quasi iste reiciendis! Obcaecati quaerat sapiente vel earum, molestias aliquid in nam exercitationem optio aut numquam sunt temporibus fugit consectetur necessitatibus porro, fugiat quidem laborum modi cum dicta! Porro, quos. Nisi dicta officiis id, eveniet placeat suscipit voluptate perspiciatis nam pariatur, possimus beatae minus rem. Quo, consectetur! Perferendis cumque eos ab doloremque sed nisi delectus a expedita quia dignissimos sequi libero ullam itaque facere quasi voluptatem odit fugiat, animi eligendi est. Eum consequatur soluta aspernatur vel quas assumenda saepe minima. Provident laudantium cum, placeat numquam deleniti eligendi amet aperiam ea inventore voluptate quaerat, commodi ad voluptatum, veritatis doloremque voluptatibus vero adipisci rerum fugit sed. Animi, voluptate sunt reprehenderit alias amet aspernatur quis ipsam reiciendis dignissimos, ipsum, mollitia ullam? Porro, sit accusantium aliquid quod reprehenderit nam atque tempora hic quo accusamus, maxime adipisci soluta non tempore, velit eius optio eligendi suscipit. Totam veritatis ea odio iste. Odit culpa delectus tempore sed tempora iusto fugiat aperiam laboriosam? Molestiae illum labore numquam a incidunt expedita exercitationem consectetur aspernatur magnam reiciendis iure voluptatum modi qui suscipit vitae neque odit error, deleniti nostrum temporibus rem. Laborum quo explicabo sit suscipit quod quam, dolor reiciendis soluta, pariatur a fugiat nihil, cumque voluptate deleniti veritatis? Necessitatibus vitae, voluptates numquam commodi facere quod distinctio fuga odio, ipsa iusto perferendis iste. Odio hic quibusdam quam eos, nam accusantium eligendi voluptatem perferendis commodi illo eaque, praesentium, facilis quod fuga esse eius tenetur. Dolorum ducimus repellendus dicta a nobis! Esse vero dolore accusamus architecto id nisi dolorum libero sequi qui! Doloremque, ut error nesciunt soluta ex molestias tempora nemo omnis eum illo sapiente natus tempore nam reiciendis nihil labore fugiat? Eum quae sit alias perspiciatis! Fuga ullam aliquid quos! Perspiciatis, tempora rerum corporis veniam illum deleniti labore quasi voluptatem! Debitis nisi totam possimus molestias quidem, blanditiis eveniet aut similique ab eius alias soluta tenetur neque vel asperiores provident non, nobis nostrum eligendi voluptas quos iure error. Vel, eum? Expedita, officia sed! Quia non qui ratione tempore soluta expedita maiores libero modi error ipsa, eveniet voluptatibus impedit, in ex quaerat dicta quis reprehenderit placeat sunt perferendis! Harum, aliquid nisi.</p>
   </div>
   </>
  );
};

export default ScrollAnimationList;

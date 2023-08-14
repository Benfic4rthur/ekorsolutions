import Icon from '@mdi/react';
import { mdiArrowRightBoldCircle } from '@mdi/js';

import arthur from '../assets/arthur.jpg';
import elias from '../assets/elias.jpg';
// import gabriel from '../assets/gabriel.jpg';
import joao from '../assets/joao.jpg';
import natacha from '../assets/natacha.jpg';
import { Card } from './TeamCard/Card';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function Team() {
  const [showAnimation, setShowAnimation] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setShowAnimation(true);
    }
  }, [inView]);

  return (
    <section className='my-10 w-full xl:container mx-auto px-3'>
      <h1 className={`text-center font-bold text-4xl ${showAnimation ? 'animate-showing' : ''}`}>
        Conheça nossa equipe
      </h1>
      <div
        className={`flex justify-center items-center mb-20 ${showAnimation ? 'animate-sobe' : ''}`}
        ref={ref}
      >
        <div
          className={`flex mt-10 w-auto overflow-x-auto mx-auto gap-3 pb-1 items-center ${
            showAnimation ? 'animate-sobe' : 'animate-showingReverse'
          }`}
          ref={ref}
        >
          <Card Name={'Arthur Graff'} Subtitle={'FullStack developer'} src={arthur} />
          <Card Name={'joão Lucas'} Subtitle={'back-end developer'} src={joao} />
          {/* <Card Name={'gabriel Duarte'} Subtitle={'front-end developer'} src={gabriel} /> */}
          <Card Name={'elias Rosa'} Subtitle={'QA'} src={elias} />
          <Card Name={'natacha Azevedo'} Subtitle={'Designer/Marketing'} src={natacha} />
        </div>
        <div className={`flex lg:hidden ${showAnimation ? 'animate-showing' : ''}`} ref={ref}>
          <p className={`text-sm pt-[1.35rem] ml-2 ${showAnimation ? 'animate-showing' : ''}`}>
            Arraste para o lado
          </p>
          <Icon
            path={mdiArrowRightBoldCircle}
            size={1}
            className={`mt-5 ml-5 ${showAnimation ? 'animate-bounceX' : ''}`}
          />
        </div>
      </div>
    </section>
  );
}

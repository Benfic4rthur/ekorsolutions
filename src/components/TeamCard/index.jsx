/* eslint-disable react/prop-types */
export const Container = ({ children, ...rest }) => (
  <div
    className='h-72 w-56 flex-shrink-0 rounded-md bg-black/40 py-6 flex gap-4 flex-col items-center'
    {...rest}
  >
    {children}
  </div>
);

export const ContainerImage = ({ children, ...rest }) => (
  <div className='bg-black/30 h-40 w-40 rounded-full overflow-hidden' {...rest}>
    {children}
  </div>
);

export const Image = ({ ...rest }) => (
  <img className='object-center object-cover	w-full h-full grayscale' {...rest} />
);

export const ContainerInfos = ({ children, ...rest }) => (
  <h3 className='text-center flex gap- flex-col ' {...rest}>
    {children}
  </h3>
);

export const Title = ({ children, ...rest }) => (
  <h3 className='capitalize text-slate-50 font-medium text-xl whitespace-nowrap overflow-scroll' {...rest}>
    {children}
  </h3>
);

export const Subtitle = ({ children, ...rest }) => (
  <p className='text-base capitalize text-slate-100' {...rest}>
    {children}
  </p>
);

export const TeamCard = {
  Container,
  ContainerImage,
  ContainerInfos,
  Image,
  Title,
  Subtitle,
};

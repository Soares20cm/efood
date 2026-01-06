import { BannerContainer, BannerContent, Category, Title } from './styles'

type Props = {
  category: string
  title: string
  backgroundImage: string
}

const ProfileBanner = ({ category, title, backgroundImage }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
      <BannerContent>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </BannerContent>
    </div>
  </BannerContainer>
)

export default ProfileBanner

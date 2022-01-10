import { memo } from 'react'

import * as cmp from '../../components'
import handlers from '../../handlers'
import * as ST from './styles'
import ClearImg from '../../assets/images/clear.png'

const HomeView = () => {
	return (
		<cmp.MainMenu>
			<ST.Banner>
				<img src={ClearImg} width={160} />
				<ST.BannerTitle>CODE CLEAR</ST.BannerTitle>
				<ST.BannerText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s.
				</ST.BannerText>
			</ST.Banner>
			<ST.Container></ST.Container>
		</cmp.MainMenu>
	)
}

export default memo(HomeView)

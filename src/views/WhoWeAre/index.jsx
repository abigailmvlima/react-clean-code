import { memo } from 'react'

import * as cmp from '../../components'
import * as ST from './styles'
import Img1 from '../../assets/images/img1.png'

const WhoWeAre = () => {
	return (
		<cmp.MainMenu>
			<cmp.Header label={'Quem Somos'} />
			<ST.Container>
				<ST.ColImg>
					<img src={Img1} />
				</ST.ColImg>
				<ST.ColDescripitions>
					<ST.Descripition>
						Com mais de 35 anos de experiência, a advogada titular do escritório oferece, juntamente
						com sua equipe, o melhor assessoramento jurídico, preventivo ou contencioso, nas áreas
						em que atua.
					</ST.Descripition>
					<ST.Descripition>
						O escritório trabalha em prol do aperfeiçoamento das relações nos diversos segmentos da
						sociedade buscando a valorização do Direito, atuando com eficiência e transparência,
						prestando serviços jurídicos de alta qualidade desenvolvidos com rapidez, eficiência e
						foco criativo.
					</ST.Descripition>
				</ST.ColDescripitions>
			</ST.Container>
		</cmp.MainMenu>
	)
}

export default memo(WhoWeAre)

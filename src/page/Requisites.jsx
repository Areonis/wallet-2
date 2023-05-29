import CustomLink from '../components/links/CustomLink'
import styles from './Page.module.scss'

export default function Requisites() {
  return (
    <div className={styles.root}>
      <CustomLink to={'/'} className="back">
        На Главную
      </CustomLink>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites}>
        <div className={styles.row}>
          <div className={styles.row_item}>
            Реквизиты Полное наименование (согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>
            Общество с ограниченной ответственностью «MOMENTUM BUSINESS STAR»
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Название компании:</div>
          <div></div>
          <div className={styles.row_item}>ООО «MOMENTUM BUSINESS STAR»</div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_item}>Адрес местонахождения:</div>
          <div></div>
          <div className={styles.row_item}>
            г. Ташкент, Яккасарайский район, ул. Урикзор, 7
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>ИНН:</div>
          <div></div>
          <div className={styles.row_item}> 309798757</div>
        </div>

        {/* <div className={styles.row}>
          <div className={styles.row_item}>Расчетный счет:</div>
          <div></div>
          <div className={styles.row_item}> 20208000805591030001</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Наименование учреждения банка:</div>
          <div></div>
          <div className={styles.row_item}>
            Joint Stock Innovation Commercial Bank «Ipak Yuli” Mirabad branch
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Адрес:</div>
          <div></div>
          <div className={styles.row_item}>
            {' '}
            100015, Tashkent city, Mirabad street, 25
          </div>
        </div> */}

        <div className={styles.row}>
          <div className={styles.row_item}>Телефоны:</div>
          <div></div>
          <div className={styles.row_item}> +79162066397</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Почта:</div>
          <div></div>
          <div className={styles.row_item}> info@momentum-llc.uz</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Генеральный директор:</div>
          <div></div>
          <div className={styles.row_item}>IGAMBERDIYEV RASUL SHAVKATOVICH</div>
        </div>
      </div>
    </div>
  )
}

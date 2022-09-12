import Layout from '../../components/layout';
import styles from '../../styles/Articles.module.css'

interface Article {
  id: number;
  title: string;
  body: string;
}

interface ArticleProps {
  dataBlog: Article[]
}

export default function Articles(props: Article) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle='Articles'>
      <div>
        {
          dataBlog.map((article) => {
            return (
              <div className={styles.flexWrapper}>
                <div key={article.id} className={styles.card}>
                  <h5 className={styles.title}>{article.title}</h5>
                  <p className={styles.content}>{article.body}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

// Digunakan untuk fetch data yang dinamis / berubah-ubah
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
  const dataBlog = await response.json();
  return {
    props: {
      dataBlog
    }
  }
}
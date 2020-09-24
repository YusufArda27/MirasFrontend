import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button';

export default function FirstPost() {
  return (
    <Layout>
      
      <h1 id="title">Miras</h1>
      <p>
        Miras Türkiye'nin farklı yerlerindeki tarihi eser ve yapıtlar hakkında bilgi sahibi olmanızı sağlayan bir uygulamadır. 
      </p>
      <div>
        <Link href="random"><button>Rastgele bir eser</button></Link>
        <Link href="all"><button>Tüm eserler</button></Link>
      </div>
      
    </Layout>
  )
}


import React, { Component } from 'react';

import { NICE, SUPER_NICE } from '../config/colors';

import { Counter, Titlebar, WindowSize } from '../components';

export class App extends Component {
  render() {
    return <div>
      <WindowSize 
        style={{
          position: 'fixed',
          top: 'auto',
          left: 'auto',
          right: '0',
          bottom: '0',
          zIndex: '10',
          backgroundColor: '#888',
          color: '#fff',
          padding: 5
        }} 
      />
      <Titlebar title="Title" />
      
      <div style={{paddingTop:120}}>
      
        <div style={{padding: "1em 1em 0 1em"}}>
          <Counter increment={1} color={NICE} />
          <Counter increment={5} color={SUPER_NICE} />
        </div>
        <div style={{padding: "1em"}}>
          <p>
            Bacon ipsum dolor amet sunt velit magna officia, elit pork chop sirloin incididunt.  Sirloin tongue in, anim capicola ham hock ut brisket consequat sint.  Et tempor quis beef ribs, exercitation fugiat anim ipsum nulla.  Beef ribs turducken in labore doner fatback aliqua aute excepteur do hamburger fugiat.  In ullamco t-bone id shankle, veniam aute consectetur beef beef ribs.  Tenderloin prosciutto ball tip spare ribs ground round lorem brisket leberkas beef elit est cillum chuck.</p><p>Velit ut cupim, reprehenderit sausage porchetta ut.  Pig rump pastrami, tongue ut boudin alcatra.  Andouille shoulder lorem, reprehenderit swine officia jowl.  Deserunt meatloaf shankle, ground round in eiusmod filet mignon alcatra fatback.  Exercitation andouille biltong, flank salami eiusmod nostrud t-bone sirloin sunt.  Pancetta meatball shoulder meatloaf.  Aute irure ball tip picanha flank short loin id.
          </p>
          <p>
            Deserunt tempor eu excepteur anim pork incididunt cow et fugiat ad doner sunt drumstick.  Short ribs boudin bresaola pork loin laborum commodo tongue.  Prosciutto do biltong nisi, pork cupim turkey in cow eiusmod ut ex reprehenderit.  Lorem biltong salami shank chicken meatloaf andouille aliquip spare ribs culpa corned beef minim.  Officia commodo picanha ut, ullamco sunt ball tip excepteur pig aliqua short loin kevin chuck nisi doner.  Exercitation eiusmod beef ut tongue consequat, sausage velit laboris veniam pancetta bacon ribeye enim.  Eiusmod chicken dolore labore capicola jowl exercitation landjaeger, magna mollit ut ham hock strip steak.
          </p>
          <p>
            Drumstick cupim fatback, laboris sed occaecat andouille leberkas culpa in esse.  Pariatur ut tri-tip landjaeger, bresaola andouille hamburger.  Ex irure drumstick, pariatur fatback laborum in chicken.  Eiusmod officia picanha, nulla flank landjaeger beef sirloin exercitation tenderloin strip steak deserunt pariatur drumstick nostrud.  Hamburger nisi cupidatat, ground round bacon biltong t-bone ut veniam salami cupim non.  Qui lorem jerky andouille pork loin, dolore ut.
          </p>
          <p>
            Ball tip short ribs exercitation jerky fatback deserunt tempor picanha aliqua ut esse pig pork chop t-bone consectetur.  Ribeye aliquip chicken, est bacon filet mignon boudin voluptate in quis sunt qui duis.  Elit anim turducken kielbasa ground round kevin capicola consectetur in strip steak, shoulder pig.  Est kielbasa anim short ribs sausage.  Beef ribs nisi ut leberkas drumstick velit.  Ribeye enim ex sausage, kielbasa biltong picanha ea tempor minim.  Enim in brisket consectetur, officia est occaecat nostrud jowl tail reprehenderit ad.
          </p>
          <p>
            Sausage enim drumstick, short ribs nulla voluptate sirloin shank fatback anim pastrami bacon.  Ut prosciutto quis frankfurter salami sint ribeye.  Tempor veniam consequat, turkey tri-tip velit short ribs tenderloin.  Pork chop fatback sint pork belly, turducken brisket rump tempor pariatur alcatra laborum.  Venison beef ribs sirloin pariatur chuck mollit rump est kielbasa short ribs salami veniam minim.  Ham quis dolore landjaeger.  Pork belly quis shank beef ribs est, ea pancetta sirloin ad.
          </p>
          <p>
            Alcatra nisi magna turkey aliquip brisket hamburger flank ut.  Lorem est rump in quis, id ea duis ham.  Meatloaf brisket sirloin cow nisi sed ribeye adipisicing, excepteur pariatur shoulder magna boudin.  Rump hamburger enim alcatra do meatball shoulder, biltong doner drumstick eu.
          </p>
          <p>
            Beef in short loin ad swine kielbasa.  Dolore deserunt corned beef venison.  Lorem filet mignon enim t-bone, officia elit jowl.  Et magna ball tip ea sunt tail pancetta andouille.  Kielbasa deserunt reprehenderit chicken et, sint tenderloin qui.  Adipisicing pariatur labore t-bone consectetur ipsum.  Alcatra chuck sirloin ipsum, short loin frankfurter landjaeger short ribs jerky ut tenderloin ullamco cupidatat ribeye.
          </p>
          <p>
            In leberkas cupidatat, cupim landjaeger fatback bacon veniam dolor aute filet mignon non.  In aliquip elit irure lorem corned beef cupidatat in venison pig prosciutto.  In mollit ribeye tempor ut tongue.  Turkey pork chop ad hamburger fatback jowl meatball ex.  Pork ullamco aliquip, non pork loin dolor pariatur duis.  Tongue magna pork loin in proident pancetta eu fugiat shank ipsum cupidatat cow capicola jerky.
          </p>
          <p>
            Deserunt beef ribs flank, ball tip laboris cupim do cupidatat meatball capicola.  Turducken eu officia, salami qui chuck brisket nulla.  Adipisicing dolore chicken swine bacon.  Consectetur alcatra ad commodo bacon ea nulla duis kielbasa.  Tenderloin pariatur occaecat velit jerky.  Kevin leberkas irure ea.  Pastrami brisket lorem culpa pig landjaeger.
          </p>
        </div>
      </div>
    </div>;
  }
}
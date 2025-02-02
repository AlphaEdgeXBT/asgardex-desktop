import { DepositMessages } from '../types'

const deposit: DepositMessages = {
  'deposit.interact.title': 'Einzahlen',
  'deposit.interact.subtitle': 'Interagiere mit {chain}Chain',
  'deposit.interact.label.bondprovider': 'Bond Provider (optional)',
  'deposit.interact.actions.bond': 'Bond',
  'deposit.interact.actions.unbond': 'Unbond',
  'deposit.interact.actions.leave': 'Verlassen',
  'deposit.interact.actions.buyThorname': 'THORName kaufen',
  'deposit.interact.actions.checkThorname': 'Verfügbarkeit prüfen',
  'deposit.interact.actions.addBondProvider': 'Bond Provider hinzufügen',
  'deposit.share.title': 'Dein Poolanteil',
  'deposit.share.units': 'Liquiditäts-Einheiten',
  'deposit.share.poolshare': 'Poolanteil',
  'deposit.share.total': 'Gesamtwert',
  'deposit.redemption.title': 'Aktueller Rückkaufwert',
  'deposit.totalEarnings': 'Deine Gesamteinkommen vom Pool',
  'deposit.add.sym': 'hinzufügen',
  'deposit.add.asym': '{asset} hinzufügen',
  'deposit.add.runeSide': '{dex} Seite',
  'deposit.add.assetSide': 'Asset Seite',
  'deposit.add.min.info':
    'Erforderlicher Mindestwert, um die Gebühren der Ein- und Auszahlungstransaktionen zu decken.',
  'deposit.add.max.info':
    'Der Maximalwert berechnet sich aus dem Gesamtguthaben ({balance}) und dem symmetrischen Verhältnis zur anderen Assetseite',
  'deposit.add.max.infoWithFee':
    'Der Maximalwert berechnet sich aus dem Gesamtguthaben ({balance}) abzüglich der voraussichtlichen Depositgebühr ({fee}) und dem symmetrischen Verhältnis zur anderen Assetseite',
  'deposit.add.state.sending': 'Sende Einzahlungs-Transaktion',
  'deposit.add.state.checkResults': 'Überprüfe Resultat der Einzahlung',
  'deposit.add.state.pending': 'Einzahlen',
  'deposit.add.state.success': 'Erfolgreich eingezahlt',
  'deposit.add.state.error': 'Fehler beim Einzahlen',
  'deposit.add.error.chainFeeNotCovered':
    'Gebühren in Höhe von {fee} sind nicht über Dein Guthaben gedeckt: {balance}.',
  'deposit.add.error.nobalances': 'Kein Guthaben',
  'deposit.add.error.nobalance1': 'Du verfügst über kein Guthaben, um {asset} hinzuzufügen.',
  'deposit.add.error.nobalance2': 'Du verfügst über kein Guthaben, um {asset1} und {asset2} hinzuzufügen.',
  'deposit.add.pendingAssets.title': 'Pending Assets gefunden',
  'deposit.add.pendingAssets.description':
    'Folgende Assets wurden erfolgreich überwiesen, jedoch als "Pending" markiert, da die Transaktion des anderen Assets noch aussteht.',
  'deposit.add.failedAssets.description':
    'Das Hinzufügen des unten stehenden Assets ist fehlgeschlagen, überprüfe, ob dies korrekt ist.',
  'deposit.add.pendingAssets.recoveryDescriptionRune':
    'Um eine Rune LP-Hinzufügung zu vervollständigen: Verwende die angepasste Einzahlungsmöglichkeit in der Wallet, um den Rune-Betrag mit dem Memo zu überweisen',
  'deposit.add.pendingAssets.recoveryDescriptionAsset':
    'Um eine Asset LP hinzuzufügen: Verwende die Sendeoption in der Wallet, um den Asset-Betrag mit dem Memo an die inboundAddress zu senden',
  'deposit.add.pendingAssets.recoveryTitle': 'Recovery Tool öffnen',
  'deposit.add.asymAssets.title': 'Asymmetrisches Deposit gefunden',
  'deposit.add.asymAssets.description':
    'Das Hinzufügen eines Assetpaares in den Pool ist nicht möglich, da Du bereits folgende(s) Asset(s) asymmetrisch (einseitig) hinzugefügt hast:',
  'deposit.add.asymAssets.recoveryDescription':
    'Asymmetrisches (einseitiges) Hinzufügen von Assets ist aktuell in ASGARDEX Desktop noch nicht möglich. Aber Du hast die Möglichkeit, dieses Feature zwischenzeitlich in THORSwap zu nutzen, um die zuvor asymmetrisch hinzugefügten Assets zurückzuüberweisen',
  'deposit.add.asymAssets.recoveryTitle': 'THORSwap',
  'deposit.add.assetMissmatch.title': 'Asset Diskrepanz',
  'deposit.add.assetMissmatch.description':
    'Eines der beiden Assets wurde bereits bei einem vorangegangenen Deposit verwendet, jedoch zusammen mit einem anderen Asset. Überprüfe die folgenden Adressen, um zu sehen, um welches Assetpaar es sich beim vorherigen Deposit handelt.',
  'deposit.bond.state.error': 'Bond Fehler',
  'deposit.unbond.state.error': 'Unbond Fehler',
  'deposit.leave.state.error': 'Fehler beim Verlassen',
  'deposit.advancedMode': 'Expertenmodus',
  'deposit.poolDetails.depth': 'Tiefe',
  'deposit.poolDetails.24hvol': '24h Volumen',
  'deposit.poolDetails.allTimeVal': 'Gesamtvolumen',
  'deposit.poolDetails.totalSwaps': 'Gesamtanzahl Swaps',
  'deposit.poolDetails.totalUsers': 'Gesamtanzahl User',
  'deposit.poolDetails.volumeTotal': 'Volumen (Gesamt)',
  'deposit.poolDetails.earnings': 'Einnahmen',
  'deposit.poolDetails.ilpPaid': 'ILP Zahlungen',
  'deposit.poolDetails.totalTx': 'Transaktionen (Gesamt)',
  'deposit.poolDetails.totalFees': 'Gebühren (Gesamt)',
  'deposit.poolDetails.members': 'Mitglieder',
  'deposit.poolDetails.apy': 'APY',
  'deposit.wallet.add': 'Wallet hinzufügen',
  'deposit.wallet.connect': 'Bitte verbinde Deine Wallet',
  'deposit.pool.noShares': 'Du hast keine Anteile in diesem Pool',
  'deposit.withdraw.sym': 'auszahlen',
  'deposit.withdraw.asym': '{asset} auszahlen',
  'deposit.withdraw.sym.title': 'Auszahlung (symmetrisch) anpassen',
  'deposit.withdraw.asym.title': 'Auszahlung (asymmetrisch) anpassen',
  'deposit.withdraw.pending': 'Auszahlen',
  'deposit.withdraw.success': 'Erfolgreich ausgezahlt',
  'deposit.withdraw.error': 'Fehler beim Auszahlen',
  'deposit.withdraw.choseText': 'Wähle einen Betrag zwischen 0 und 100% zum Auszahlen',
  'deposit.withdraw.fees': 'Transaktionsgebühr: {thorMemo}, Auszahlungsgebühren: {thorOut} + {assetOut}',
  'deposit.withdraw.feeNote': 'Hinweis: {fee} werden für die Transaktionsgebühr in Deiner Wallet belassen',
  'deposit.withdraw.error.feeNotCovered':
    'Transaktionsgebühr in Höhe von {fee} ist nicht über Dein Guthaben {balance} gedeckt.',
  'deposit.ledger.sign': 'Klicke "Weiter", um die Einzahlungstransaktion mit Deinem Ledger zu signieren.'
}

export default deposit

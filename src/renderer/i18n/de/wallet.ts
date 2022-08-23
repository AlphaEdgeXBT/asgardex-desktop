import { WalletMessages } from '../types'

const wallet: WalletMessages = {
  'wallet.name': 'Wallet Name',
  'wallet.name.maxChars': 'Max. {max} Zeichen',
  'wallet.name.error.empty': 'Bitte Namen der Wallet angeben',
  'wallet.name.error.rename': 'Error beim Umbenennen der Wallet',
  'wallet.nav.deposits': 'Einzahlungen',
  'wallet.nav.bonds': 'Bonds',
  'wallet.nav.poolshares': 'Anteile',
  'wallet.column.name': 'Name',
  'wallet.column.ticker': 'Ticker',
  'wallet.action.send': 'Senden',
  'wallet.action.upgrade': 'Upgrade',
  'wallet.action.receive': 'Empfangen {asset}',
  'wallet.action.forget': 'Entfernen',
  'wallet.action.unlock': 'Entsperren',
  'wallet.action.import': 'Importieren',
  'wallet.action.create': 'Erstellen',
  'wallet.action.connect': 'Verbinden',
  'wallet.action.deposit': 'Einzahlung',
  'wallet.balance.total.poolAssets': 'Gesamtguthaben von Pool Assets',
  'wallet.balance.total.poolAssets.info':
    'Die Gesamtsumme beinhaltet das Guthaben aller Assets, welche bei THORChain in Pools verfügbar sind. Nur über Pools können Preise bei THORChain ermittelt werden.',
  'wallet.shares.total': 'Gesamtwert',
  'wallet.connect.instruction': 'Bitte verbinde Deine Wallet',
  'wallet.lock.label': 'Wallet sperren',
  'wallet.unlock.title': 'Entsperre "{name}"',
  'wallet.unlock.label': 'Wallet entsperren',
  'wallet.unlock.instruction': 'Bitte entsperre Deine Wallet',
  'wallet.unlock.password': 'Bitte gebe Dein Passwort ein',
  'wallet.unlock.error': 'Die Wallet konnte nicht entsperrt werden. Bitte überprüfe Dein Passwort und versuche es .',
  'wallet.imports.keystore.select': 'Keystore-Datei auswählen',
  'wallet.imports.keystore.title': 'Bitte wähle die Keystore-Datei Deiner Wallet',
  'wallet.imports.phrase.title':
    'Bitte gebe die Phrase Deiner Wallet ein, jeweils mit einem Leerzeichen zwischen den Wörtern',
  'wallet.imports.wallet': 'Importiere eine bestehende Wallet',
  'wallet.imports.enterphrase': 'Phrase eingeben',
  'wallet.imports.error.instance': 'Es konnte keine Instanz vom Client erstellt werden',
  'wallet.imports.error.keystore.load': 'Ungültige Keystore-Datei',
  'wallet.imports.error.keystore.import': 'Error beim Importieren der Keystore Wallets',
  'wallet.imports.error.keystore.password': 'Ungültiges Passwort',
  'wallet.phrase.error.valueRequired': 'Bitte Phrase angeben',
  'wallet.imports.error.phrase.empty': 'Importiere eine bestehende Wallet mit Guthaben',
  'wallet.phrase.error.invalid': 'Invalide Phrase',
  'wallet.phrase.error.import': 'Error beim Importieren der Phrase',
  'wallet.txs.history': 'Transaktionenverlauf',
  'wallet.create.copy.phrase': 'Phrase kopieren',
  'wallet.create.error.phrase.empty': 'Erstelle eine neue Wallet und füge ein Guthaben hinzu',
  'wallet.add.another': 'Weitere Wallet hinzufügen',
  'wallet.add.label': 'Wallet hinzufügen',
  'wallet.change.title': 'Wallet wechseln',
  'wallet.change.error': 'Error beim Wechseln der Wallet',
  'wallet.selected.title': 'Ausgwählte Wallet',
  'wallet.create.title': 'Erstelle eine Wallet',
  'wallet.create.enter.phrase': 'Gebe Deine Phrase in richtiger Reihenfolge ein',
  'wallet.create.words.click': 'Klicke die Wörter in der richtigen Reihenfolge',
  'wallet.create.creating': 'Erstelle eine Wallet ...',
  'wallet.create.error': 'Fehler beim Erstellen der Wallet',
  'wallet.create.error.phrase': 'Falsche Phrase. Bitte überprüfe Deine Phrase und gebe diese erneut ein.',
  'wallet.receive.address.error': 'Keine Addresse für den Empfang vorhanden',
  'wallet.receive.address.errorQR': 'Error beim Rendern des QR Codes: {error}',
  'wallet.remove.label': 'Wallet entfernen',
  'wallet.remove.label.title': 'Bist Du sicher, dass Du "{name}" enfernen möchstest?',
  'wallet.remove.label.description':
    'Zur Wiederherstellung Deiner Wallet benötigst Du Deine Phrase. Bitte stelle sicher, dass Du diese bereits an einem sicheren Ort abgelegt hast',
  'wallet.send.success': 'Transaktion war erfolgreich.',
  'wallet.send.fastest': 'Am Schnellsten',
  'wallet.send.fast': 'Schnell',
  'wallet.send.average': 'Mittel',
  'wallet.send.max.doge':
    'Der berechnete max. Wert basiert auf geschätzte Gebühren, welche bei DOGE von Zeit zur Zeit inkorrekt sein können. Im Falle eines "Balance Insufficient for transaction" Fehler, gehe zu https://blockchair.com/dogecoin/transactions , um einen Durchschnittswert der aktuellen Gebühren zu erhalten und versuche diese von Deiner Balance abzuziehen, bevor Du die Transaktion versendest.',
  'wallet.errors.balancesFailed': 'Fehler beim Laden der Guthaben. {errorMsg}',
  'wallet.errors.asset.notExist': 'Asset ({asset}) existiert nicht',
  'wallet.errors.address.empty': 'Keine Addresse angegeben',
  'wallet.errors.address.invalid': 'Addresse ist nicht valide',
  'wallet.errors.address.couldNotFind': 'Addresse vom {pool} Pool konnte nicht gefunden werden',
  'wallet.errors.amount.shouldBeNumber': 'Der eingegebene Wert sollte eine Nummer sein',
  'wallet.errors.amount.shouldBeGreaterThan': 'Der eingegebene Betrag sollte höher als {amount} betragen',
  'wallet.errors.amount.shouldBeGreaterOrEqualThan':
    'Der eingegebene Betrag sollte gleich oder höher als {amount} betragen',
  'wallet.errors.amount.shouldBeLessThanBalance': 'Der eingegebene Betrag sollte nicht höher als Dein Guthaben sein',
  'wallet.errors.amount.shouldBeLessThanBalanceAndFee':
    'Der eingegebene Wert sollte nicht höher als Dein Guthaben abzgl. Gebühren sein',
  'wallet.errors.fee.notCovered': 'Die Gebühren sind nicht über Dein Guthaben ({balance}) gedeckt',
  'wallet.errors.invalidChain': 'Ungültige Chain: {chain}',
  'wallet.errors.memo.max': 'Memo darf nicht mehr als {max} Zeichen beinhalten',
  'wallet.password.confirmation.title': 'Wallet Passwort bestätigen',
  'wallet.password.confirmation.description': 'Bitte gebe zur Bestätigung Dein Wallet Password ein.',
  'wallet.password.confirmation.pending': 'Überprüfe Passwort',
  'wallet.password.empty': 'Bitte ein Passwort angeben',
  'wallet.password.confirmation.error': 'Passwort ist falsch',
  'wallet.password.repeat': 'Passwort wiederholen',
  'wallet.password.mismatch': 'Passwort stimmt nicht überein',
  'wallet.send.error': 'Error beim Versenden',
  'wallet.upgrade.pending': 'Upgraden',
  'wallet.upgrade.success': 'Updgrade erfolgreich',
  'wallet.upgrade.error': 'Error beim Upgraden',
  'wallet.upgrade.error.data': 'Invalide Daten für Asset {asset}',
  'wallet.upgrade.error.loadPoolAddress': 'Addresse vom {pool} Pool konnte nicht geladen werden',
  'wallet.upgrade.feeError': 'Die Upgrade Gebühr {fee} ist nicht über Dein Guthaben {balance} gedeckt',
  'wallet.validations.lessThen': 'Der eingegebene Betrag sollte weniger als {value} betragen',
  'wallet.validations.graterThen': 'Der eingegebene Betrag sollte höher als {amount} betragen',
  'wallet.validations.shouldNotBeEmpty': 'Diese Angabe darf nicht leer sein.',
  'wallet.ledger.verifyAddress.modal.title': 'Verify Ledger Address',
  'wallet.ledger.verifyAddress.modal.description': 'Überprüfe die Addresse {address} auf Deinem Ledger'
}

export default wallet
